# Verwenden Sie eine offizielle Node.js-Image als Basis
FROM node:14
LABEL authors="philipppollmann"

# Setzen Sie das Arbeitsverzeichnis in Ihrem Container
WORKDIR /app

# Kopieren Sie die package.json- und package-lock.json-Dateien in den Container
COPY package*.json ./

# Installieren Sie die Abhängigkeiten Ihrer Anwendung
RUN npm install

# Kopieren Sie den Rest Ihrer Anwendung in den Container
COPY . .

# Bauen Sie Ihre Nuxt.js-Anwendung
RUN npm run build

# Exponieren Sie den Port, auf dem Ihre Anwendung läuft (standardmäßig 3000)
EXPOSE 3000

# Starten Sie Ihre Nuxt.js-Anwendung beim Start des Containers
CMD [ "npm", "start" ]
