# Ideaflow

**Ideaflow** is a MERN stack (MongoDB, Express.js, React.js, Node.js) based full-stack application for journaling, blogging, and idea tracking with future support for AI-enhanced drafting.

## Features
- JWT-based user authentication
- Create, edit, and delete short-form "Idea Cards"
- Tagging, moods, and optional public posting
- Basic timeline display and browsing

## Installation
```bash
git clone https://github.com/yourusername/ideaflow.git
cd ideaflow
```
### Backend Setup
```bash
cd backend
npm install
node server.js
```
### Frontend Setup
```bash
cd frontend
npm install
npm start
```
Ensure MongoDB is running locally on `mongodb://localhost:27017/ideaflow`

## Deployment (GitHub + Cloud)
- Commit code to GitHub repo.
- Set up MongoDB Atlas (or self-hosted)
- Use Render, Heroku, AWS, or Azure for backend deployment.
- Frontend can be deployed to Vercel, Netlify, or S3 + CloudFront.