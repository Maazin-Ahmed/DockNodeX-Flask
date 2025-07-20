# 🚢 DockNodeX-Flask

A simple **Dockerized microservices** project combining **Python Flask** (backend API) and **Node.js Express** (frontend) — orchestrated using **Docker Compose**.  
Built to practice containerization, multi-service setup, and basic DevOps workflows.

---

## 📁 Project Structure

.
├── backend/ # Flask API                            <br>
├── frontend/ # Express server                  <br>
├── docker-compose.yaml # Docker Compose config<br>
├── .gitignore<br>
├── screenshots/ # Project screenshots<br>
└── README.md<br>

---

## ⚙️ What it Does

✅ Flask API returns JSON data  
✅ Express frontend displays a simple form (Name + Email)  
✅ Form sends data to Flask API  
✅ Both containers run together via `docker-compose`

---

## 🐳 How to Run

1️⃣ **Clone this repo:**
```bash
git clone https://github.com/Maazin-Ahmed/DockNodeX-Flask.git
cd DockNodeX-Flask
```


2️⃣ **Build & run the containers:**
```bash
docker-compose up --build
```



  📸 Screenshots
    
   ✅ API Response:<img width="631" height="479" alt="Screenshot from 2025-07-21 04-43-42" src="https://github.com/user-attachments/assets/7ce71a6f-48b7-4f71-9f38-2f2cbe384047" />
   ✅EBS:<img width="1917" height="922" alt="Screenshot from 2025-07-21 03-18-47" src="https://github.com/user-attachments/assets/2eab78bb-21e4-4f8a-90a1-26c8220140ec" />
   ✅Running on EBS :<img width="1918" height="479" alt="Screenshot from 2025-07-21 03-24-49" src="https://github.com/user-attachments/assets/fa95d9a1-490d-4406-80b7-4ab7c1bf3b54" />


    🧰 Tech Stack

  Python 3.x + Flask<br>
  Node.js + Express<br>
  Docker<br>
  Docker Compose<br>
  AWS EBS
    


      




    
