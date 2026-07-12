FROM node:20-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .
ENV PORT=9090
EXPOSE 9090
CMD ["node", "server.js"]
