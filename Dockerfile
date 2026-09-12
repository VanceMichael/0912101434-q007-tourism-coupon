FROM node:22-alpine
WORKDIR /app
COPY package.json server.js ./
RUN npm install
EXPOSE 8080
CMD ["node","server.js"]
