# 🚀 DevOps CI/CD Pipeline Project

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

### 3️⃣ Version Control using GitHub
- Initialized Git repository
- Pushed code to GitHub

### 4️⃣ AWS EC2 Setup
- Launched Ubuntu EC2 instance
- Configured security groups (22, 3000)

### 5️⃣ Server Configuration
```bash
sudo apt update -y
sudo apt install docker.io git openjdk-11-jdk -y


### Deployment Steps
git clone https://github.com/omkardgawas/devops-ci-cd-project.git
cd devops-ci-cd-project
docker build -t devops-app .
docker run -d -p 3000:3000 devops-app

### Live Application
http://<EC2-PUBLIC-IP>:3000
