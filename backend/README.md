# 📦 Product Management API – Backend (Express.js + MongoDB)

This is a secure and scalable backend API for managing product data with authentication. It is built using **Node.js**, **Express**, **MongoDB**, and **JWT**. Users can register, login, and manage their own products.

---

## 🚀 Features

- User Registration & Login (JWT-based auth)
- Create, Read, products
- Passwords hashed using bcrypt
- JWT-protected routes
- MongoDB & Mongoose for data modeling

---

## 🧱 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for Authentication
- bcryptjs for password hashing
- dotenv for env management

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/Ashish32507/product-management.git
cd product-management
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

```env
PORT=3000
DB_URI=mongodb://localhost:27017/product-api
JWT_SECRET=your_jwt_secret_ke
```

---

## 🏁 Run the Server

```bash
npm run dev
```

> Dev Server: `http://localhost:3000`
> Live Link: `https://product-management-1-ol0l.onrender.com`

---

## 🔐 Authentication API

| Method | Endpoint            | Description         |
|--------|---------------------|---------------------|
| POST   | `/api/auth/register`| Register a new user |
| POST   | `/api/auth/login`   | Login & get token   |


### 🔐 Example Register Body

```json
{
  "name":"Test",
  "email": "test@example.com",
  "password": "Test@123"
}
```

### 🔐 Example Login Body

```json
{
  "email": "test@example.com",
  "password": "Test@123"
}
```

---

## 📦 Product API (JWT Required)

> All product routes require Bearer Token in headers.

```http
Authorization: Bearer <JWT_TOKEN>
```

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| POST   | `/api/products`  | Add a new product   |
| GET    | `/api/products`  | Get all products    |

### ✅ Example Product Body

```json
{
  "name": "Phone",
  "description": "Latest Android",
  "price": 12000
}
```

---

## 🔐 JWT Auth Middleware

Ensures that only authenticated users can access product-related routes. JWT is stored in HTTP headers.

---

## 📌 Default Test User

```json
{
  "email": "test@example.com",
  "password": "Test@123"
}
```

---

---

## 📦 Scripts

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

---

## 🗃 Folder Structure

```
product-management/
│
├── config/           # DB connection
├── controllers/      # Route logic
├── middleware/       # Auth middleware
├── models/           # Mongoose schemas
├── routes/           # Auth and Product routes
├── .env              # Environment config
├── server.js         # App entry point
└── package.json
```

---

## 🔐 Security

- All passwords are hashed using bcrypt
- Routes are protected using JWT
- Proper error handling and status codes

---

## 📬 Contact

Created by **Ashish Kumar Yadav**  
