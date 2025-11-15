# Deployment and DevOps for MERN Applications

This assignment focuses on deploying a full MERN stack application to production, implementing CI/CD pipelines, and setting up monitoring for your application.

## Assignment Overview

You will:
1. Prepare your MERN application for production deployment
2. Deploy the backend to a cloud platform
3. Deploy the frontend to a static hosting service
4. Set up CI/CD pipelines with GitHub Actions
5. Implement monitoring and maintenance strategies

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week7-Assignment.md` file
4. Use the provided templates and configuration files as a starting point

## Files Included

- `Week7-Assignment.md`: Detailed assignment instructions
- `.github/workflows/`: GitHub Actions workflow templates
- `deployment/`: Deployment configuration files and scripts
- `.env.example`: Example environment variable templates
- `monitoring/`: Monitoring configuration examples

## Requirements

- A completed MERN stack application from previous weeks
- Accounts on the following services:
  - GitHub
  - MongoDB Atlas
  - Render, Railway, or Heroku (for backend)
  - Vercel, Netlify, or GitHub Pages (for frontend)
- Basic understanding of CI/CD concepts

## Deployment Platforms

### Backend Deployment Options
- **Render**: Easy to use, free tier available
- **Railway**: Developer-friendly, generous free tier
- **Heroku**: Well-established, extensive documentation

### Frontend Deployment Options
- **Vercel**: Optimized for React apps, easy integration
- **Netlify**: Great for static sites, good CI/CD
- **GitHub Pages**: Free, integrated with GitHub

## CI/CD Pipeline

The assignment includes templates for setting up GitHub Actions workflows:
- `frontend-ci.yml`: Tests and builds the React application
- `backend-ci.yml`: Tests the Express.js backend
- `frontend-cd.yml`: Deploys the frontend to your chosen platform
- `backend-cd.yml`: Deploys the backend to your chosen platform

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all deployment tasks
2. Set up CI/CD pipelines with GitHub Actions
3. Deploy both frontend and backend to production
4. Document your deployment process in the README.md
5. Include screenshots of your CI/CD pipeline in action
6. Add URLs to your deployed applications

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Render Documentation](https://render.com/docs)
- [Railway Documentation](https://docs.railway.app/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)



Deployment and DevOps for MERN Applications

This repository contains my completed MERN stack application, deployed to production, with CI/CD pipelines and monitoring implemented as per the assignment instructions.

Assignment Overview

This project demonstrates:

Preparing a MERN application for production deployment

Deploying the backend to a cloud platform

Deploying the frontend to a static hosting service

Setting up CI/CD pipelines with GitHub Actions

Implementing monitoring and maintenance strategies

Project Setup

Clone this repository:

git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name


Install backend dependencies:

cd server
npm install


Install frontend dependencies:

cd ../client
npm install


Create a .env file in the backend (server) folder:

MONGO_URI=<your-mongodb-atlas-uri>
PORT=5000
SENTRY_DSN=<your-sentry-dsn>


Run locally:

# Backend
cd server
npm start

# Frontend
cd ../client
npm run dev

Project Structure
server/          # Express backend
client/          # React frontend (Vite)
deployment/      # Deployment scripts and configuration
monitoring/      # Monitoring configuration
.github/workflows/  # CI/CD pipeline templates
.env.example     # Example environment variables

Deployment Details
Backend Deployment

Platform: Render

URL: https://deployment-and-devops-essentials-esther.onrender.com

Steps:

Push backend code to GitHub.

Connect Render to GitHub repository.

Set environment variables on Render.

Deploy the server.

Confirm API is running at / and /health.
Frontend Deployment


Platform: Render / Vercel / Netlify


URL: https://your-frontend-url.com


Steps:


Build frontend using Vite:
cd client
npm run build



Serve dist/ folder using backend Express or deploy separately to Vercel/Netlify.


Update frontend to point to backend API URL.





CI/CD Pipelines
Backend


Workflow file: .github/workflows/backend-ci.yml


Runs tests, linting, and deploys to Render on push to main.


Frontend


Workflow files:


.github/workflows/frontend-ci.yml → Builds and tests React app.


.github/workflows/frontend-cd.yml → Deploys frontend to hosting platform.





Monitoring


Sentry integration for error tracking:


Backend errors reported at /debug-sentry.


Frontend errors captured via @sentry/react.




Basic health checks:


/health endpoint returns { status: "ok" }.





Screenshots
(Add screenshots of CI/CD pipelines and deployed app here)

URLs
ComponentURLBackend APIhttps://deployment-and-devops-essentials-esther.onrender.comFrontend Apphttps://https://deployment-and-devops-essentials-esther-malowa-gc4s693sy.vercel.app/

Resources


GitHub Actions Documentation


MongoDB Atlas Documentation


Render Documentation


Vercel Documentation





