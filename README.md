DNS Lookup Tool (React + Node + Express + MongoDB)

Run locally without Docker:
1. Backend:
   cd backend
   npm install
   # set MONGO_URI in .env or use default localhost
   npm run dev

2. Frontend:
   cd frontend
   npm install# 🌐 DNS Lookup Protocol Project

A full-stack web application that allows users to perform DNS lookups using a friendly UI.  
It resolves domain names (like `google.com`) into their IP addresses, stores lookup history in MongoDB, and provides REST API endpoints for developers.

---

## 🚀 Features

✅ Perform DNS lookups for any domain name  
✅ View real-time lookup results on a React interface  
✅ Backend built with Node.js and Express  
✅ MongoDB integration to log search history  
✅ REST API with GET, POST, DELETE, and PATCH endpoints  
✅ Docker setup for easy deployment  
✅ Tailwind CSS interface (simple and responsive)

---

## 🧠 Tech Stack

| Layer | Technology Used |
|:------|:----------------|
| Frontend | React.js + Tailwind CSS |
| Backend | Node.js + Express.js |
| Database | MongoDB (Mongoose) |
| Deployment | Docker & Docker Compose |

---

## 📂 Project Structure

dns_lookup_project/
├── backend/
│ ├── index.js
│ ├── models/
│ ├── routes/
│ ├── .env.example
│ └── Dockerfile
├── frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── Dockerfile
├── docker-compose.yml
├── README.md
└── .gitignore

yaml
Copy code

---

## ⚙️ Setup Instructions

### 🧩 Option 1: Run Locally

#### 1. Clone this repository
```bash
git clone https://github.com/<your-username>/dns-lookup-protocol.git
cd dns-lookup-protocol
2. Setup backend
bash
Copy code
cd backend
npm install
cp .env.example .env
npm run dev
Make sure your .env file includes:

ini
Copy code
MONGO_URI=mongodb://localhost:27017/dns_lookup
PORT=5000
3. Setup frontend
bash
Copy code
cd ../frontend
npm install
npm start
Frontend runs on http://localhost:3000
Backend runs on http://localhost:5000

🐳 Option 2: Run with Docker
If you have Docker installed:

bash
Copy code
docker-compose up --build
That’s it!
Frontend → http://localhost:3000
Backend API → http://localhost:5000/api

📡 API Endpoints
Method	Endpoint	Description
GET	/api/dns	Fetch all saved DNS lookups
POST	/api/dns	Perform a new DNS lookup
DELETE	/api/dns/:id	Delete a DNS record
PATCH	/api/dns/:id	Update a record (optional)

🖥️ Example UI
pgsql
Copy code
+-------------------------------------------------------+
| Domain: [ www.google.com ]  [ Lookup ]                |
+-------------------------------------------------------+
| Results:                                              |
|  - google.com → 142.250.183.100                       |
|  - facebook.com → 157.240.22.35                       |
+-------------------------------------------------------+
💡 Future Improvements
Add reverse DNS lookup (IP → domain)

Add user authentication (JWT)

Show geolocation info of resolved IPs

📜 License
This project is open-source under the MIT License
   npm start

API Endpoints:
GET /api/lookup?domain=example.com  -> Perform DNS lookup and save to MongoDB
GET /api/history -> Last saved lookups (JSON)

Docker (recommended for easy setup):
From project root where docker-compose.yml is located:
  docker-compose up --build

This will start MongoDB, backend (port 5000), and frontend (port 3000 mapped to nginx:80).
