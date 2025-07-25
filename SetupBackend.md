🚀 Prerequisites
Make sure the following are installed:

Java 17+

Maven 3.6+

Docker & Docker Compose

Git

Optional: Postman or REST client for testing

📁 Project Contents
Your backend folder should contain:

.env file — for environment variables

src/main/resources/application.properties — Spring Boot config

docker-compose.yml — runs Keycloak and MySQL containers

📦 Step 1: Setup .env
Create a .env file in the root of your backend project with the following:

env
Copy
Edit
# App Info
APP_NAME=Baatchit_v1.0
SERVER_PORT=9999

# MySQL DB (Keycloak DB)
DB_URL=jdbc:mysql://localhost:3377/keycloak
DB_USERNAME=root
DB_PASSWORD=password

# JPA / Hibernate
DDL_AUTO=update
SHOW_SQL=true
HIBERNATE_DIALECT=org.hibernate.dialect.MySQL8Dialect
FLYWAY_ENABLED=false

# Keycloak Realm Issuer URI
KEYCLOAK_ISSUER_URI=http://localhost:9081/realms/Baatchit

# File Upload Config
MAX_FILE_SIZE=50MB
MEDIA_OUTPUT_PATH=F:/baatchitv-01
📌 You can change values like MEDIA_OUTPUT_PATH if needed — just ensure the path exists.

⚙️ Step 2: application.properties
Spring Boot is configured to load values from the .env file:

properties
Copy
Edit
# src/main/resources/application.properties

# App Info
spring.application.name=${APP_NAME}
server.port=${SERVER_PORT}

# Datasource
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# Hibernate / JPA
spring.jpa.hibernate.ddl-auto=${DDL_AUTO}
spring.jpa.show-sql=${SHOW_SQL}
spring.jpa.properties.hibernate.dialect=${HIBERNATE_DIALECT}
spring.flyway.enabled=${FLYWAY_ENABLED}

# Keycloak JWT
spring.security.oauth2.resourceserver.jwt.issuer-uri=${KEYCLOAK_ISSUER_URI}

# File Upload
spring.servlet.multipart.max-file-size=${MAX_FILE_SIZE}
application.file.uploads.media-output-path=${MEDIA_OUTPUT_PATH}
🐳 Step 3: Start Keycloak & MySQL
Your backend will run locally — only Keycloak and MySQL are containerized.

Open a terminal and go to the backend root folder (where docker-compose.yml is located).

Run:

bash
Copy
Edit
docker-compose up
📌 Do not change ports in docker-compose.yml. These are used in .env and backend configs.

Port Mapping
Service	Port
Keycloak	http://localhost:9081
MySQL	localhost:3377

🔐 Step 4: Configure Keycloak
Visit http://localhost:9081

Login:

pgsql
Copy
Edit
Username: admin
Password: admin@1234
Create a Realm:

Name: Baatchit

Create a Client:

Client ID: baatchitAppclient

Protocol: openid-connect

Click Next → Next → Save

Update Client Settings:

Access Type: public

Standard Flow Enabled: ✅

Direct Access Grants Enabled: ✅

Root Url http://localhost:4200
Valid Redirect URIs: *

Web Origins: *

Display On UI: ✅

Save.

⚠️ If Using Frontend
If you're using the frontend (Angular or React), and if you changed/opted different options then above:


Then also update the frontend environment.ts 
otherwise not needed 

▶️ Step 5: Run the Backend
You can now run your Spring Boot backend:

bash
Copy
Edit
./mvnw spring-boot:run
Or (if Maven is installed globally):

bash
Copy
Edit
mvn spring-boot:run
Backend should be live at:

arduino
Copy
Edit
http://localhost:9999
📂 File Uploads
Uploaded media will be saved to:

bash
Copy
Edit
F:/baatchitv-01
📌 Make sure this folder exists or is writable.

✅ You're Done!
Your backend is ready to use with:

Real-time messaging

Keycloak JWT authentication

File uploads
