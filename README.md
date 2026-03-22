# 🚀 DevOps CI/CD Project
End-to-end DevOps pipeline using Docker and AWS EC2 with automated deployment workflow.

## 📌 Project Overview
This project demonstrates an end-to-end DevOps pipeline where a Node.js application is containerized using Docker and deployed on AWS EC2.

---

## 🧰 Tech Stack
- Node.js
- Docker
- AWS EC2
- GitHub
- Linux (Ubuntu)

---

## 🏗️ Architecture
GitHub → Docker → AWS EC2 → Live Application

---

## ⚙️ Step-by-Step Implementation

### 1️⃣ Created Node.js Application
- Built a simple Express app
- Verified locally on port 3000

### 2️⃣ Containerized Application
- Created Dockerfile
- Built Docker image
- Ran container locally

  <img width="1792" height="67" alt="image" src="https://github.com/user-attachments/assets/0acafa2f-7841-49e8-aeb6-61b0276e19b9" />

### 3️⃣ Version Control using GitHub
- Initialized Git repository
- Pushed code to GitHub

### 4️⃣ AWS EC2 Setup
- Launched Ubuntu EC2 instance
- Configured security groups (22, 3000)

---

### 5️⃣ Server Configuration
sudo apt update -y
sudo apt install docker.io git openjdk-11-jdk -y

### Deployment Steps
git clone https://github.com/omkardgawas/devops-ci-cd-project.git
cd devops-ci-cd-project
docker build -t devops-app .
docker run -d -p 3000:3000 devops-app

<img width="1916" height="1017" alt="image" src="https://github.com/user-attachments/assets/13686f7f-12ee-4110-a71e-50808be561d0" />

---

### Live Application
http://3.234.146.178:3000/

<img width="1918" height="925" alt="image" src="https://github.com/user-attachments/assets/95e8d1f4-e179-4c23-b5fc-627397a6a757" />

--- 
## 🎯 Key Achievements
- Built and deployed a containerized application using Docker and AWS EC2
- Reduced manual deployment effort through containerization
- Designed a scalable and reproducible deployment workflow

---

## 💡 Learnings
- Hands-on experience with Docker containerization
- Understanding of cloud deployment using AWS EC2
- Practical exposure to Linux server management

```


