# Naitify AI Tech

[![React](https://img.shields.io/badge/React-18-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.9-green)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20.6.0-lightgreen)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-brightgreen)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blueviolet)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

## Project Overview

Naitify AI Tech is a modern AI-focused portfolio website showcasing smart AI solutions, projects, and services.  
Built with **React + Vite frontend**, **Tailwind CSS**, and **Node.js + Express backend** using **MongoDB**, it features interactive AI projects, responsive design, and smooth animations.

---

## Features

- Modern **React 18 frontend** with Vite bundler
- Responsive layout with **Tailwind CSS** and **dark mode**
- AI-powered projects showcase:
  - EHR System with AI Chatbot
  - Fake News Detection (Flask)
  - Vehicle Price Prediction
  - Heart Disease Prediction
  - Fraud Transaction Detection
- Interactive portfolio with live demos
- Contact form integration with EmailJS
- JWT authentication for secure backend routes
- Dashboard with AI suggestions
- SEO optimization and smooth animations with Framer Motion
- Production-ready backend with compression and MongoDB connection pooling

---

## Technologies Used

**Frontend:**
- React 18
- Vite 4.4.9
- Tailwind CSS 3.3.3
- Framer Motion

**Backend:**
- Node.js 20.6.0
- Express 4.x
- MongoDB 6.0
- JWT for authentication
- Compression middleware

**Development Tools:**
- VS Code
- Git & GitHub
- Nodemon
- Postman / curl for API testing

---

## Project Structure

naitify-aitech-website/
│
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── contactController.js
│ │ └── ...
│ ├── middleware/
│ │ └── auth.js
│ ├── models/
│ │ └── User.js
│ ├── routes/
│ │ ├── auth.js
│ │ ├── contact.js
│ │ └── welcome.js
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── public/
│ │ └── index.html
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── Navbar.jsx
│ │ │ └── ...
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ ├── Services.jsx
│ │ │ ├── Projects.jsx
│ │ │ ├── Blog.jsx
│ │ │ └── Contact.jsx
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── index.css
│ └── package.json
│
├── .gitignore
├── README.md
└── package.json

yaml
Copy code

---

## Getting Started

### Prerequisites

- Node.js >= 20
- npm >= 9
- MongoDB running locally or Atlas
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/NAITIKK682/naitify_aitech.git
cd naitify-aitech-website

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
Running Locally
Backend:

bash
Copy code
cd backend
npm run dev
Frontend:

bash
Copy code
cd frontend
npm run dev
Available Scripts
Frontend:

npm run dev – Start development server

npm run build – Build for production

Backend:

npm run dev – Start server with Nodemon

npm start – Start server normally

Deployment Guide
Frontend:

Deploy to GitHub Pages or Vercel/Netlify

Build with npm run build and push the dist/ folder to gh-pages branch

Backend:

Deploy to Heroku or Railway

Use environment variables from .env

CI/CD:

Frontend workflow: build and deploy to gh-pages on push to main

Backend workflow: deploy to Heroku on push to main

Configure repository secrets for environment variables

Environment Variables
Frontend (.env):

makefile
Copy code
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_CONTACT_RECIPIENT_EMAIL=
Backend (.env):

makefile
Copy code
MONGO_URI=
JWT_SECRET=
JWT_EXPIRE=
JWT_COOKIE_EXPIRE=
ADMIN_KEY=
NODE_ENV=
PORT=
Production Optimizations
Enable NODE_ENV=production

Backend: compression middleware, database connection pooling

Frontend: Vite build minification and caching

Security headers and environment variable management