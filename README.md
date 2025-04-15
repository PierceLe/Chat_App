# 💬 DreamChat Full-Stack Application

DreamChat is a modern full-stack chat and social interaction platform. The **frontend** is built with React and TypeScript, while the **backend** is developed using FastAPI and MySQL. The system supports students to collaborate like real time communication with end to end encryption, etc.

---

## 🌐 Frontend Overview

### Folder Structure

```
frontend/
├── public/             # Static files
│   ├── assets/         # Public assets
│   ├── index.html      # Main HTML file
│   └── ...
├── src/                # Source code
│   ├── core/           # Core application code
│   ├── feature-module/ # Feature-specific modules
│   │   ├── admin/      # Admin-related features
│   │   ├── auth/       # Authentication features
│   │   ├── pages/      # Page components
│   │   ├── router/     # Router configuration
│   │   └── uiInterface/# UI interface components
│   ├── style/          # SCSS and CSS styles
│   ├── index.tsx       # Application entry point
│   └── index.scss      # Main stylesheet
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

### Requirements
- Node.js (v14.0 or higher)
- npm (v6.0 or higher)

### Getting Started

```bash
cd frontend
npm install
npm start
```

---

## 🐍 Backend Overview (FastAPI + MySQL)

### Folder Structure

```
backend/
├── controller/                  # Contains API endpoint definitions (routes)
├── dto/                         # Data Transfer Objects: defines structure of API requests and responses
│   ├── request/                 # Request DTOs – structures for incoming data
│   └── response/                # Response DTOs – structures for outgoing data
├── exception/                   # Handles custom error definitions and global exception handling
│   ├── app_exception.py         # Custom application-specific exceptions
│   ├── error_code.py            # Enum or constants for error codes
│   └── global_exception_handler.py  # Catches and handles exceptions globally in the app
├── middleware/                  # Middleware functions (e.g. authentication, logging)
├── model/                       # Database models / ORM schemas
├── repository/                  # Data access layer – handles interaction with the database
├── service/                     # Business logic layer – processes data before passing to controller
├── utils/                       # Utility functions used throughout the application
├── config.py                    # Centralized configuration for the application
├── database.py                  # Database connection setup and session management
├── main.py                      # Entry point of the FastAPI application
├── requirements.txt             # Lists Python dependencies required to run the backend
├── settings.yaml                # Environment-specific settings (e.g., DB credentials, secrets)
```

### Requirements

- Python 3.13
- MySQL
- virtualenv

### Setup Instructions

```bash
cd backend
# 👉 Move into the backend project directory

virtualenv env_chatapp --python=python3.13
# 🐍 Create a new virtual environment named "env_chatapp" using Python 3.13 interpreter

source env_chatapp/bin/activate
# 🔄 Activate the virtual environment so Python & pip use the isolated environment

pip install -r requirements.txt
# 📦 Install all required Python dependencies listed in requirements.txt
```

### Email Configuration (Google SMTP)
- Use Google’s SMTP service to send emails
- Make sure your Google account has 2-Step Verification enabled
- Search for “App Passwords” in your Google account settings
  ![Alt text](/backend/images/app_password.png)
- Create a new app password, then copy and paste it into the APP_EMAIL -> PASSWORD section of your settings.yaml file
  ![Alt text](/backend/images/create_new_app.png)
- copy the hidden text that I am trying to hide it
  ![Alt text](/backend/images/password.png)
Create an App Password in your Google Account settings and configure `settings.yaml`:

```yaml
DATABASE:
  MYSQL:
    HOST: 
    PORT: 
    USERNAME: 
    PASSWORD: 
    DATABASE: 

AUTHENTICATION:
  ALGORITHM: "HS256"
  SECRET_KEY_LOGIN: 
  ACCESS_TOKEN_EXPIRE_MINUTES_LOGIN: 300
  SECRET_KEY_EMAIL_VERIFICATION: 
  ACCESS_TOKEN_EXPIRE_MINUTES_EMAIL_VERIFICATION: 5
  SECRET_KEY_2FA_VERIFICATION: 
  ACCESS_TOKEN_EXPIRE_MINUTES_2FA_VERIFICATION: 5

APP_EMAIL:
  SENDER: "youremail@gmail.com"
  PASSWORD: "app_password"
  SMTP_SERVER: "smtp.gmail.com"
  SMTP_PORT: 587

WEB:
  FRONTEND:
    DOMAIN: "http://localhost:3000"
  BACKEND:
    DOMAIN: "http://localhost:9990"
```

### Running the Server

```bash
python main.py
```

---

