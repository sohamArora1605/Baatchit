Baatchit Chat Application
======= Baatchit is a real-time, secure chat application built using Spring Boot, Keycloak (OAuth2), MySQL, Angular, WebSocket, and JWT-based Authentication. It supports real-time messaging, media uploads, emojis, push notifications, and live translation of messages using external translation APIs.

📝 Description This project enables secure, real-time communication between users with support for:

User authentication using Keycloak OAuth2 (JWT token)

Real-time chat using WebSocket (SockJS + STOMP)

File/media upload (images, videos)

Emoji input support

Chat notifications

Modern, responsive Angular UI

🔐 Authentication System Integrated Keycloak for:

User login, registration, and profile

Endpoints are protected using JWT access tokens

Role-based access control (user/admin)

🧑‍💻 Tech Stack Layer Technology Frontend Angular 17, HTML, SCSS Backend Spring Boot 3.x, Spring MVC Authentication Keycloak (OAuth2 + JWT) Database MySQL Realtime WebSocket, STOMP, SockJS Media Upload Multipart file API Deployment Localhost / Cloud / Docker

📂 Backend Structure UserController, ChatController, MessageController, MediaController Services: UserService, ChatService, MessageService Entities: User, Chat, Message, Media Security Config: JWT Filter, OAuth2ResourceServer CORS & WebSocket config

🎨 Frontend Features (Angular) Responsive and modern UI

Emoji input picker Socket-based message flow Message rendering with media Authentication and Authorization via Keycloak backed by spring security Notification indicator for new messages

🧪 Testing Flow You can test the complete flow using Postman and the provided frontend.

✅ Backend Testing (Postman)

Feature Method Endpoint Description 🔐 Get Profile GET /api/v1/users/me Get the currently logged-in user's profile

💬 Send Message POST /api/v1/messages Send a new text message

📤 Upload Media POST /api/v1/messages/upload-media?chat-id={chatId} Upload media file in a chat

🧾 Fetch Chat List GET /api/v1/chats Get list of chats for logged-in user

JWT must be attached to all secured endpoints in Authorization: Bearer header.

✅ Frontend Testing

Login via Keycloak

Start chat, send messages, and upload media
📚 Related Documents

📄 High-Level Design:

📄 Low-Level Design:

📄 API Spec: OpenAPI.txt

📄 Demo Video: YouTube Link

👨‍💻 Contributors Developed with ❤ by the Baatchit Dev Team: Soham Arora

📦 Installation & Setup 
first clone the entire repository locally and 
refer to frontend and backed setup.md 
where detailed description is given 
