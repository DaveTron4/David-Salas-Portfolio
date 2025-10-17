# Stage 1 — build the React app
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (use package*.json located in this folder)
COPY package*.json ./
RUN npm install

EXPOSE 5173

CMD ["npm", "run", "start"]