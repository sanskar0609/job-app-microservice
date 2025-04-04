
# Job Microservice Project

This project consists of multiple microservices that work together to provide job-related functionalities. It includes separate services for handling company data, job postings, and user reviews. The frontend is deployed separately.

## 🚀 Live Deployments

- **Frontend:** [Job Microservice Frontend](https://jobmicroservice.netlify.app/)
- **Backend Services:**
  - **Company Microservice:** [API Endpoint](https://companyms-y376.onrender.com)
  - **Job Microservice:** [API Endpoint](https://jobms-ipus.onrender.com)
  - **Review Microservice:** [API Endpoint](https://reviewms-wgcp.onrender.com)

## 🐳 Docker Hub Images

These Docker images can be pulled from Docker Hub to deploy the microservices.

- **Company Microservice Image:** [`sanskar0609/companyms`](https://hub.docker.com/r/sanskar0609/companyms)
- **Job Microservice Image:** [`sanskar0609/jobms`](https://hub.docker.com/r/sanskar0609/jobms)
- **Review Microservice Image:** [`sanskar0609/reviewms`](https://hub.docker.com/r/sanskar0609/reviewms)

## 📌 How to Use

1. Clone the repositories for each microservice.
2. Pull the Docker images using:
   ```sh
   docker pull sanskar0609/companyms
   docker pull sanskar0609/jobms
   docker pull sanskar0609/reviewms

3. Run the containers using:
   docker run -d -p <port>:<container-port> sanskar0609/companyms
   docker run -d -p <port>:<container-port> sanskar0609/jobms
   docker run -d -p <port>:<container-port> sanskar0609/reviewms
   
4.Access the microservices through the provided API endpoints.

📞 Contact
For any issues or contributions, feel free to open an issue or reach out!

   
