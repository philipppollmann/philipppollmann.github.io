FROM node:18 AS builder
LABEL authors="philipppollmann"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run generate

RUN ls -la /app
RUN find /app -type d -name "public" -o -name "dist"


FROM nginx:alpine
LABEL authors="philipppollmann"

COPY --from=builder /app/.output/public /usr/share/nginx/html


COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]