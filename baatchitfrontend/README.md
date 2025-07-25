<<<<<<< HEAD
# WhatsappCloneUi

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
Baatchit is a real-time, secure chat application built using Spring Boot, Keycloak (OAuth2), MySQL, Angular, WebSocket, and JWT-based Authentication. It supports real-time messaging, media uploads, emojis, push notifications, and live translation of messages using external translation APIs.

📝 Description
This project enables secure, real-time communication between users with support for:

User authentication using Keycloak OAuth2 (JWT token)

Real-time chat using WebSocket (SockJS + STOMP)

File/media upload (images, videos)

Emoji input support

Chat notifications

Modern, responsive Angular UI

🔐 Authentication System
Integrated Keycloak for:

User login, registration, and profile

Endpoints are protected using JWT access tokens

Role-based access control (user/admin)

🧑‍💻 Tech Stack
Layer	Technology
Frontend	Angular 17, HTML, SCSS
Backend	Spring Boot 3.x, Spring MVC
Authentication	Keycloak (OAuth2 + JWT)
Database	MySQL
Realtime	WebSocket, STOMP, SockJS
Media Upload	Multipart file API
Deployment	Localhost / Cloud / Docker

📂 Backend Structure
UserController, ChatController, MessageController, MediaController
Services: UserService, ChatService, MessageService
Entities: User, Chat, Message, Media
Security Config: JWT Filter, OAuth2ResourceServer
CORS & WebSocket config

🎨 Frontend Features (Angular)
Responsive and modern UI

Emoji input picker
Socket-based message flow
Message rendering with media
Authentication and Authorization via Keycloak backed by spring security 
Notification indicator for new messages

🧪 Testing Flow
You can test the complete flow using Postman and the provided frontend.

✅ Setup Keycloak (Auth Server)
Start Keycloak with the configured realm.

Configure client baatchit-client as public with http://localhost:4200/* in redirect URIs.

✅ Backend Testing (Postman)

Feature	Method	Endpoint	                            Description
🔐 Get Profile	GET	/api/v1/users/me	      Get the currently logged-in user's profile

💬 Send Message	POST	/api/v1/messages	Send a new text message

📤 Upload Media	POST	/api/v1/messages/upload-media?chat-id={chatId}	Upload media file in a chat

🧾 Fetch Chat List	GET	/api/v1/chats	  Get list of chats for logged-in user

JWT must be attached to all secured endpoints in Authorization: Bearer <token> header.

✅ Frontend Testing

Login via Keycloak 

Start chat, send messages, and upload media

📦 Installation & Setup

🔧 Backend (Spring Boot)

# Clone project

# Update application.properties with your Keycloak & DB config

# Run

./mvnw spring-boot:run

🔧 Frontend (Angular)
cd baatchit-frontend

npm install

ng serve

🗂️ OpenAPI Documentation
Baatchit uses Swagger/OpenAPI for documenting all APIs.

Visit: http://localhost:9999/swagger-ui/index.html

OR 

Visit: http://localhost:9999/v3/api-docs

🌐 Deployment
The application can be deployed on:

Localhost
Docker containers (Keycloak + Backend + Frontend)

Cloud platforms like Heroku, AWS, or Azure

📚 Related Documents


📄 High-Level Design: 

📄 Low-Level Design: 


📄 API Spec:
OpenAPI.txt

📄 Demo Video: YouTube Link

👨‍💻 Contributors
Developed with ❤️ by the Baatchit Dev Team:
Soham Arora
>>>>>>> 18f0cffc3dce443570c9147706ba77b38b894333
