DNS Lookup Tool (React + Node + Express + MongoDB)

Run locally without Docker:
1. Backend:
   cd backend
   npm install
   # set MONGO_URI in .env or use default localhost
   npm run dev

2. Frontend:
   cd frontend
   npm install
   npm start

API Endpoints:
GET /api/lookup?domain=example.com  -> Perform DNS lookup and save to MongoDB
GET /api/history -> Last saved lookups (JSON)

Docker (recommended for easy setup):
From project root where docker-compose.yml is located:
  docker-compose up --build

This will start MongoDB, backend (port 5000), and frontend (port 3000 mapped to nginx:80).
