# ChopURL

A simple URL shortener application with separate frontend and backend components. This project allows users to shorten long URLs for easier sharing.

## Features

- Shorten long URLs into easy-to-share short links
- Redirect to original URL when short link is visited
- Simple frontend interface for URL shortening

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Deployment:** Local setup instructions provided

### Prerequisites

- [Node.js](https://nodejs.org/) (v12+)
- [MongoDB](https://www.mongodb.com/) instance or cloud setup

1. **Clone the Repository**
2. Navigate to Backend directory and install dependencies
   ```bash
    cd backend
    npm install
3. Add MongoDB connection string in db/index.js
4. Navigate to the frontend directory and install dependencies
   ```bash
    cd frontend
    npm install
5. Run the application
   ```bash
    node backend/src/index.js
    cd frontend
    npm run dev
   

