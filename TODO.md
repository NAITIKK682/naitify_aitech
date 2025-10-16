# CI/CD Setup for Naitify AI Tech Project

## Objective
Set up full CI/CD for Naitify AI Tech project (React + Vite frontend, Node.js + Express backend) using GitHub Actions and ensure production-ready deployment.

## Steps

### 1. Create GitHub Actions Workflows
- [x] Create `.github/workflows` directory
- [x] Create `frontend-deploy.yml`:
  - Checkout repo
  - Setup Node.js
  - Install frontend dependencies
  - Run `vite build`
  - Deploy `dist` folder to `gh-pages` branch using `peaceiris/actions-gh-pages`
- [x] Create `backend-deploy.yml`:
  - Checkout repo
  - Setup Node.js
  - Install backend dependencies
  - Deploy backend to Heroku using `akhileshns/heroku-deploy` action

### 2. Configure Secrets in GitHub
- [ ] Set up repository secrets for backend: `MONGO_URI`, `JWT_SECRET`, `NODE_ENV`, `PORT`
- [ ] Set up repository secrets for frontend: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`, `VITE_CONTACT_RECIPIENT_EMAIL`

### 3. Optimize for Production
- [x] Ensure `NODE_ENV=production` is set in backend deployment
- [x] Add compression middleware to backend for better performance
- [x] Verify Vite handles minification and optimization by default
- [x] Suggest database connection pooling in MongoDB config

### 4. Update Documentation
- [x] Update `README.md` with GitHub Actions setup instructions
- [x] List required secrets and environment variable setup
- [x] Add production deployment notes and optimizations

### 5. Testing and Verification
- [ ] Push changes to `main` branch
- [ ] Verify workflows run correctly in GitHub Actions
- [ ] Check frontend deployed to GitHub Pages
- [ ] Check backend deployed to Heroku
- [ ] Test production builds and functionality
