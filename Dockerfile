#build base image, for React it's base image is node
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "build"]

