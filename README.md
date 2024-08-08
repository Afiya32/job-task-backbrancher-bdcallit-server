BD Call IT Project
Table of Contents
Project Overview
Technologies Used
Installation
Backend Setup
Frontend Setup
Environment Variables
Running the Project
Deployment
Project Structure
License
Project Overview
BD Call IT is an e-commerce application for mechanical keyboards. The project consists of a backend API built with Node.js and Express, and a frontend interface developed using React, Redux, and Tailwind CSS.

Technologies Used
Backend:
Node.js
Express.js
TypeScript
Mongoose (MongoDB)
Zod (for validation)
JWT (for authentication)
dotenv (for environment variables)
Frontend:
React
Redux
TypeScript
Tailwind CSS
React Router DOM
SweetAlert (for alerts)
Lottie (for animations)
Installation
Prerequisites:
Node.js (v16.x or higher)
npm or yarn
MongoDB (local or cloud instance)
git clone https://github.com/your-username/bd-call-it.git
cd bd-call-it
Backend Setup
cd backend
npm install
Setup environment variables:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Frontend Setup
cd frontend
Environment Variables
Make sure to set up the necessary environment variables in both the backend and frontend directories as shown above. These are crucial for connecting to the database, managing authentication, and linking the frontend with the backend.
