# 🌐 Personal Portfolio Website

This is my **personal portfolio website**, built to showcase my projects, skills, and professional experience as a **Full Stack Developer**.  
It is fully deployed on an **AWS EC2 instance**, containerized with **Docker**, and uses **Nginx** as a reverse proxy for secure and efficient routing.

---

## 🚀 Features

- Responsive and modern portfolio UI built with **React + Tailwind CSS**  
- Smooth animations powered by **Framer Motion**  
- Fully containerized using **Docker**  
- Secure deployment with **HTTPS** enabled via **port 443**  
- Custom domain managed via **AWS Route 53**  
- Hosted on **AWS EC2 instance** with automatic startup via `docker-compose`

---

## 🧱 Tech Stack

**Frontend:**
- React  
- TypeScript  
- Tailwind CSS  
- Framer Motion  

**Backend / Deployment:**
- AWS EC2  
- AWS Route 53 (Domain management)  
- Docker & Docker Compose  
- Nginx (Reverse Proxy)  

---

## ⚙️ AWS Setup

### 1. **Hosting on EC2**
- Created an **Ubuntu EC2 instance** on AWS.  
- Installed **Docker**, **Docker Compose**, and **Nginx**.  
- Configured security groups to allow traffic on **ports 80, 443, and 2173**.

### 2. **Domain Management (Route 53)**
- Purchased/connected a domain via **AWS Route 53**.  
- Created an **A record** pointing to the EC2 instance’s public IP address.  

### 3. **SSL Certificate**
- Used **Certbot** to generate and renew SSL certificates automatically for HTTPS support.  

---

## 🧠 Notes

- The React app runs on port 2173 inside the container.
- Nginx routes incoming requests from port 80 (HTTP) and port 443 (HTTPS) to port 2173.
- Docker ensures isolation, easy updates, and portability for the app.
- Route 53 handles domain resolution for seamless access.

---

## 🧑‍💻 Author

David Salas C.
Full Stack Developer | Cybersecurity Enthusiast | Web Designer
📧 davidtnt970@gmail.com
🌐 https://davidsalascarrascal.dev