# 🌐 DNS Lookup Protocol Project

A full-stack web application that performs **DNS lookups** to resolve domain names into IP addresses.  
It provides both a **REST API** and a **React-based user interface**, with lookup history stored in **MongoDB**.

---

## 🚀 Features

- 🌍 Perform DNS lookups for any domain name  
- ⚡ Instant results displayed via React frontend  
- 💾 Lookup history saved in MongoDB  
- 🔁 RESTful API with GET, POST, PATCH, DELETE endpoints  
- 🐳 Docker support for one-command deployment  
- 🎨 Clean responsive UI with Tailwind CSS  

---

## 🧠 Tech Stack

| Layer | Technology |
|:------|:------------|
| Frontend | React.js + Tailwind CSS |
| Backend | Node.js + Express.js |
| Database | MongoDB (Mongoose) |
| Deployment | Docker + Docker Compose |

---

## 📁 Folder Structure

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

### 🧩 Run Locally

#### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/dns-lookup-protocol.git
cd dns-lookup-protocol
2️⃣ Setup Backend
bash
Copy code
cd backend
npm install
cp .env.example .env
npm run dev
Example .env file:

ini
Copy code
MONGO_URI=mongodb://localhost:27017/dns_lookup
PORT=5000
3️⃣ Setup Frontend
bash
Copy code
cd ../frontend
npm install
npm start
🖥️ App runs at:
Frontend → http://localhost:3000
Backend → http://localhost:5000

🐳 Run Using Docker
If you have Docker installed:

bash
Copy code
docker-compose up --build
Then open your browser at http://localhost:3000 🌍
MongoDB, backend, and frontend will run automatically.

🔌 API Endpoints
Method	Endpoint	Description
GET	/api/dns	Get all saved DNS lookups
POST	/api/dns	Perform a new DNS lookup
DELETE	/api/dns/:id	Delete a lookup record
PATCH	/api/dns/:id	Update a lookup record

🖥️ Example UI Preview
pgsql
Copy code
+--------------------------------------------------------+
| 🌐 Enter Domain: [ www.google.com ] [ Lookup ]         |
+--------------------------------------------------------+
| 📄 Results:                                            |
|  google.com → 142.250.183.100                         |
|  facebook.com → 157.240.22.35                         |
+--------------------------------------------------------+
🧩 Example Backend Response
json
Copy code
{
  "domain": "google.com",
  "ip": "142.250.183.100",
  "timestamp": "2025-11-12T15:30:00Z"
}
💡 Future Enhancements
🔄 Add reverse DNS (IP → Domain)

🗺️ Show geolocation info of resolved IPs

🔐 Add user authentication (JWT)

📈 Show lookup history with charts

📜 License
This project is released under the MIT License.
