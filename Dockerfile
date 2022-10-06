FROM alphine
RUN apk add --update nodejs npm
WORKDIR /var/www/html
COPY package.json ./
RUN npm ci
COPY . .
EXPOSE 3000