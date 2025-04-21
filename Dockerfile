FROM node:18 AS builder
LABEL authors="philipppollmann"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run generate

FROM nginx:alpine
LABEL authors="philipppollmann"

COPY --from=builder /app/server/.output/public /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]