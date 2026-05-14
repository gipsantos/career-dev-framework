FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN mkdir -p /data
EXPOSE 3000
ENV DB_PATH=/data/db.json
CMD ["node", "server.js"]
