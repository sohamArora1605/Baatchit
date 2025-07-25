Here's the complete Markdown version of your Angular frontend setup guide. You can directly copy and paste this into your GitHub README or `SETUP.md`:

---

# 🚀 Baatchit Frontend Setup Guide

Follow these steps to set up and run the Baatchit Angular frontend locally.

---

## ✅ Prerequisites

Make sure you have the following installed:

* **Node.js** (v18+): [Download Node.js](https://nodejs.org/)
* **Angular CLI** (v16+):

  ```bash
  npm install -g @angular/cli
  ```
* **Git**: [Download Git](https://git-scm.com/downloads)
* **A modern browser**: (e.g., Chrome, Edge, Firefox)
* 🔴 **Ensure that port `4200` is free** and not used by any other application.

---

## 🧑‍💻 Project Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/sohamArora1605/Baatchit.git
cd baatchitfrontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

---

## ⚙️ Configuration

### 🌐 Environment Setup

Open the environment configuration file and verify the ports:

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  keycloak: {
    url: 'http://localhost:9081',
    realm: 'Baatchit',
    clientId: 'baatchitAppclient'
  },
  frontendserver: {
    url: 'http://localhost:4200'
  },
  backendserver: {
    url: 'http://localhost:9999'
  },
  websocketUrl: 'http://localhost:9999/ws'
};
```

> 🛑 **Important**: Double-check all ports and URLs. Ensure port `4200` is free before starting the app.

---

## 🖥️ Run the Application

```bash
ng serve
```

Once the server is running, open your browser and navigate to:

👉 [http://localhost:4200](http://localhost:4200)

The application will automatically reload on any code changes.

