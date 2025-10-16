# Naitify AI Tech Portfolio

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF.svg)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-339933.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.5.0-47A248.svg)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.7-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A professional portfolio website showcasing Naitify AI Tech's AI solutions, projects, and services. Built with React, Vite, Tailwind CSS, and a Node.js backend powered by MongoDB. Founded by Naitik Kushwaha in 2025 (Mumbai), we combine creativity and AI innovation to solve real-world problems with modern technology.

## 🌟 Features

- **Modern React Frontend**: Built with React 18 and Vite for fast development and optimal performance
- **Responsive Design**: Fully responsive UI with Tailwind CSS and dark mode support
- **AI-Powered Solutions**: Showcase of AI chatbots, automation tools, and intelligent systems
- **Interactive Portfolio**: Featured projects with live demos and GitHub links
- **Contact Integration**: EmailJS-powered contact forms with file upload support
- **Authentication System**: JWT-based user authentication with protected routes
- **Dashboard**: AI suggestions and project management features
- **SEO Optimized**: React Helmet Async for better search engine visibility
- **Animations**: Smooth animations with Framer Motion
- **Backend API**: Node.js/Express server with MongoDB for data management

## 🚀 Key Pages

- **Home**: Hero section with video, AI features showcase, client testimonials, and company stats
- **Services**: Comprehensive list of AI services including chatbots, automation, and consulting
- **Projects**: Portfolio of 6+ AI and ML projects with live demos
- **Blog**: Coming soon page for future content
- **Contact**: Contact form, business information, and FAQ section
- **About**: Company information and team details

## 🛠️ Technologies Used

### Frontend
- **React 18.2.0** - Modern JavaScript library for building user interfaces
- **Vite 5.0.0** - Fast build tool and development server
- **Tailwind CSS 3.4.7** - Utility-first CSS framework
- **Framer Motion 7.6.0** - Animation library for React
- **React Router DOM 6.14.1** - Declarative routing for React
- **React Helmet Async 2.0.5** - Document head management
- **SweetAlert2 11.26.2** - Beautiful alert dialogs
- **EmailJS Browser 3.8.0** - Email sending from client-side
- **Heroicons React 2.2.0** - Beautiful hand-crafted SVG icons

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express 4.18.2** - Fast, unopinionated web framework
- **MongoDB 7.5.0** - NoSQL database for flexible data storage
- **Mongoose 7.5.0** - Elegant MongoDB object modeling
- **JWT (jsonwebtoken) 9.0.2** - JSON Web Token implementation
- **bcryptjs 2.4.3** - Password hashing library
- **CORS 2.8.5** - Cross-origin resource sharing
- **Morgan 1.10.0** - HTTP request logger middleware
- **Multer 2.0.2** - Middleware for handling file uploads
- **Validator 13.11.0** - String validation and sanitization
- **dotenv 16.3.1** - Environment variable management

### Development Tools
- **ESLint 9.36.0** - Linting utility for JavaScript and JSX
- **PostCSS 8.5.6** - Tool for transforming CSS
- **Autoprefixer 10.4.21** - PostCSS plugin for vendor prefixes

## 📁 Project Structure

```
naitify-aitech-portfolio/
├── backend/                          # Node.js/Express backend
│   ├── config/
│   │   └── db.js                     # Database configuration
│   ├── controllers/                  # Route controllers
│   │   ├── authController.js
│   │   ├── contactController.js
│   │   ├── productController.js
│   │   └── profileController.js
│   ├── middlewares/                  # Custom middleware
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── models/                       # Mongoose models
│   │   ├── Contact.js
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/                       # API routes
│   │   ├── auth.js
│   │   ├── blog.js
│   │   ├── contact.js
│   │   ├── dashboard.js
│   │   ├── products.js
│   │   └── profile.js
│   ├── utils/                        # Utility functions
│   ├── package.json                  # Backend dependencies
│   ├── server.js                     # Main server file
│   └── server-admin.js               # Admin server
├── public/                           # Static assets
│   ├── _headers                      # Netlify headers
│   └── vite.svg
├── src/                              # React frontend source
│   ├── assets/                       # Images, fonts, icons, videos
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   └── videos/
│   ├── components/                   # Reusable React components
│   │   ├── auth/                     # Authentication components
│   │   ├── contact/                  # Contact form components
│   │   ├── dashboard/                # Dashboard components
│   │   ├── layout/                   # Layout components (Header, Footer, etc.)
│   │   ├── sections/                 # Page sections
│   │   ├── seo/                      # SEO components
│   │   └── ui/                       # UI components (Button, Card, etc.)
│   ├── context/                      # React context providers
│   │   ├── AuthContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/                         # Static data files
│   ├── hooks/                        # Custom React hooks
│   ├── pages/                        # Page components
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Products.jsx
│   │   ├── Profile.jsx
│   │   ├── Projects.jsx
│   │   └── Services.jsx
│   ├── utils/                        # Utility functions
│   ├── App.css                       # Global styles
│   ├── App.jsx                       # Root component
│   ├── index.css                     # Tailwind imports
│   ├── main.jsx                      # App entry point
│   └── router.jsx                    # Route configuration
├── .env                              # Environment variables
├── .gitignore                        # Git ignore rules
├── eslint.config.js                  # ESLint configuration
├── index.html                        # HTML template
├── package.json                      # Frontend dependencies
├── postcss.config.js                 # PostCSS configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── vite.config.js                    # Vite configuration
└── README.md                         # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- MongoDB (local installation or cloud instance like MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/naitify-aitech-portfolio.git
   cd naitify-aitech-portfolio
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```
   # MongoDB Configuration
   MONGO_URI=mongodb://localhost:27017/naitify-aitech

   # JWT Configuration
   JWT_SECRET=your_super_secret_jwt_key_here

   # Environment
   NODE_ENV=development

   # Server Port
   PORT=5000
   ```

   For EmailJS (Contact form), add to `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_CONTACT_RECIPIENT_EMAIL=naitify.aitech@gmail.com
   ```

5. **Start MongoDB service**
   ```bash
   # For local MongoDB
   mongod

   # Or use MongoDB Atlas for cloud database
   ```

6. **Start the development servers**

   **Frontend:**
   ```bash
   npm run dev
   ```

   **Backend (in a new terminal):**
   ```bash
   npm run backend
   # or
   cd backend && npm run dev
   ```

7. **Open your browser**

   Navigate to [http://localhost:5173](http://localhost:5173) for the frontend.

## 📦 Available Scripts

### Frontend Scripts
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Locally preview production build
- `npm run lint` - Run ESLint

### Backend Scripts
- `npm run backend` - Start backend server from root
- `npm run dev` (in backend/) - Start backend with nodemon

## 🚀 Deployment Guide

### Automated CI/CD with GitHub Actions

This project uses GitHub Actions for automated deployment:

#### Frontend Deployment (GitHub Pages)
- **Trigger**: Push to `main` branch
- **Build Process**: Vite build with production optimizations
- **Deployment**: Automatic deployment to GitHub Pages
- **URL**: `https://naitify-aitech.github.io/naitify-aitech-website` (or your custom domain)

#### Backend Deployment (Heroku)
- **Trigger**: Push to `main` branch
- **Build Process**: Node.js dependencies installation
- **Deployment**: Automatic deployment to Heroku
- **URL**: Your Heroku app URL

### Manual Deployment Options

#### Frontend Deployment (Vite + Netlify/Vercel)

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variables in Netlify dashboard

3. **Deploy to Vercel**
   - Connect your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Add environment variables in Vercel dashboard

#### Backend Deployment (Node.js + MongoDB)

1. **Prepare for production**
   ```bash
   cd backend
   npm run build  # if using TypeScript
   ```

2. **Deploy to Heroku**
   ```bash
   heroku create your-app-name
   heroku config:set MONGO_URI=your_mongodb_atlas_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   git push heroku main
   ```

3. **Deploy to Railway/DigitalOcean**
   - Create a new project
   - Connect your repository
   - Set environment variables
   - Deploy

### GitHub Actions Setup

#### Required Repository Secrets

Set these secrets in your GitHub repository settings (Settings > Secrets and variables > Actions):

**Frontend Secrets:**
- `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key
- `VITE_CONTACT_RECIPIENT_EMAIL` - Contact recipient email

**Backend Secrets:**
- `HEROKU_API_KEY` - Your Heroku API key
- `HEROKU_APP_NAME` - Your Heroku app name
- `HEROKU_EMAIL` - Your Heroku account email
- `MONGO_URI` - MongoDB Atlas connection string
- `JWT_SECRET` - JWT secret key
- `PORT` - Port number (optional, defaults to 5000)

#### How to Set Up Secrets:

1. Go to your GitHub repository
2. Click on "Settings" tab
3. In the left sidebar, click "Secrets and variables" > "Actions"
4. Click "New repository secret"
5. Add each secret with its corresponding value

### Production Optimizations

- **Compression**: Enabled for all responses in production
- **Database Connection Pooling**: Configured with optimal settings for production
- **Vite Build**: Automatic minification, tree-shaking, and asset optimization
- **Security Headers**: Configured in Vite preview plugin
- **Environment Variables**: Securely managed through GitHub secrets

### Environment Variables for Production

Ensure these are set in your deployment platform:

```
# Backend
MONGO_URI=your_production_mongodb_uri
JWT_SECRET=your_secure_jwt_secret
NODE_ENV=production
PORT=5000

# Frontend
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_CONTACT_RECIPIENT_EMAIL=your_contact_email
```

## 📋 Featured Projects

| Project | Description | Technologies | GitHub | Live Demo |
|---------|-------------|--------------|--------|-----------|
| **Responsive Tour and Travel Website** | Modern responsive website with destinations and bookings | HTML, CSS, JavaScript | [GitHub](https://github.com/NAITIKK682/Responsive-Tour-And-Travel-website) | [Live](https://naitikk682.github.io/Responsive-Tour-And-Travel-website/) |
| **Fake News Detection** | NLP + ML project to classify news as real or fake | Flask, Python, ML, Bootstrap | [GitHub](https://github.com/NAITIKK682/Fake-News-Detection-Flask) | - |
| **EHR System with AI Chatbot** | Electronic Health Record system with AI chatbot | Flask, SQLite, Python, AI | [GitHub](https://github.com/NAITIKK682/EHR-SYSTEM) | [Live](https://ehr-system-2.onrender.com) |
| **Vehicle Price Prediction** | ML model for used car price prediction | Python, ML, Pandas, Scikit-learn | [GitHub](https://github.com/NAITIKK682/vehicle-price-prediction) | - |
| **Heart Disease Prediction** | ML system for heart disease prediction | Python, ML, Flask, Scikit-learn | [GitHub](https://github.com/NAITIKK682/Heart-Disease-Prediction) | - |
| **Fraud Transaction Detection** | AI system for fraud detection | Python, ML, Flask, Scikit-learn | [GitHub](https://github.com/NAITIKK682/Fraud-Transaction-Detection) | - |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Run `npm run lint` before committing
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Naitify AI Tech**
- **Email**: naitify.aitech@gmail.com
- **Phone**: +91 8948866980
- **Location**: Vasai East - 401208, Palghar, Maharashtra
- **Website**: [Coming Soon]

**Founder**: Naitik Kushwaha

---

**Built with ❤️ by Naitify AI Tech**
