import { Injectable, signal } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment.development';
import { Ichat } from '../interface/chat-interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  supabase!: SupabaseClient;
  public savedChat = signal({});

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

async chatMessage(text: string) {
  try {
    // 1. Get the current logged-in user
    const { data: { user } } = await this.supabase.auth.getUser();

    if (!user) {
      alert("You must be logged in to send messages");
      return;
    }

    // 2. Include the 'sender' (user.id) in the insert object
    const { data, error } = await this.supabase
      .from('chat')
      .insert({ 
        text, 
        sender: user.id  // This satisfies the RLS policy: auth.uid() = sender
      });

    if (error) {
      alert(error.message);
    }
    return data;
  } catch (error) {
    alert(error);
    return null;
  }
}

  async listChat() {
    try {
      const { data, error } = await this.supabase
        .from('chat')
        .select('*,users(*)');

      if (error) {
        alert(error.message);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async deleteChat(id: string) {
    const data = await this.supabase.from('chat').delete().eq('id', id);

    return data;
  }

  selectedChats(msg: Ichat) {
    this.savedChat.set(msg);
  }
}
