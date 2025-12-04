# Mizzi-Net Shop (Registration)

Small Node/Express app providing a registration and account-deletion UI and API.

## Features
- Static front-end (HTML/CSS/JS) for register & delete actions
- Server endpoints: POST /register, POST /delete
- Password hashing (bcrypt) and MongoDB persistence

## Requirements
- Node.js (16+)
- MongoDB URI

## Quick setup
1. Create .env with:
   MONGODB_URI=<your-mongo-uri>
   PORT=3000
2. Install and run:
   npm install
   npm start

## API
- POST /register — body: { firstName, lastName, phoneNumber, email, password, confirmPassword }
- POST /delete — body: { email, password }
