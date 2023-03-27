#build base image, for React it's base image is node
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# CMD ["npm", "run", "build"]
RUN npm run build

# Nginx stage
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]