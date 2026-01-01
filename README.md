# Real-Time Chat Application using Angular 20 and Supabase

## Student Information
- Name: Nurin Nisrina binti Syazwan Wirdani  
- Student ID: 2024643144  
- Group: CDCS3703B
- Lecturer: MUHAMMAD ATIF BIN RAMLANgit add .

---

## Project Background
This project was developed as part of a laboratory exercise to build a real-time chat application using Angular 20 as the frontend framework and Supabase as the backend service. The main objective of this project is to provide hands-on experience in integrating a frontend framework with a backend platform to produce a functional web application.

Angular was chosen due to its modular structure and strong support for component-based development, while Supabase was used to handle authentication, database management, and real-time data synchronization. Through this project, students are exposed to modern web development tools and real-time application concepts.

---

## Project Discussion
The development of this project began with setting up a new Angular application using the Angular Command Line Interface (CLI). This step helped in understanding the structure of an Angular project, including the roles of components, services, and configuration files. Components were used to manage the user interface, while services handled application logic and communication with the backend.

One of the main challenges encountered during this project was configuring Supabase, as it was the first experience using the platform. Initially, understanding how Supabase manages authentication and real-time database updates was difficult. However, by exploring the Supabase dashboard, it became clearer how to create database tables, configure authentication settings, and obtain the required API keys to connect the Angular application to Supabase.

Another challenge involved managing environment configuration in Angular. The Supabase URL and anonymous key needed to be stored correctly in the environment configuration file. Incorrect importing of these variables caused connection issues at first. After fixing the file path and configuration, the application was able to connect successfully to Supabase.

The most important feature implemented in this project was the real-time chat functionality. Supabase allows the application to listen for database changes, enabling new messages to appear instantly and deleted messages to be removed without refreshing the page. This feature provided a clear understanding of how real-time applications function.

Throughout the development process, several TypeScript-related errors were encountered, such as missing return values in asynchronous functions and type-checking issues. Resolving these errors improved understanding of `async` and `await` and highlighted the importance of TypeScript in producing safer and more reliable code.

Overall, this project provided valuable experience in frontend and backend integration, real-time data handling, authentication, and problem-solving in modern web application development.



# Chat2

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

## Environmental Variables

To cinfigure this project, generate your environmetal variables and add the Supabasekey and Supabase url using the command below:

```
ng g environments
```

## Development server

To start a local development server, run:

```bash
ng serve
```

