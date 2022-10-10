FROM alpine
RUN apk add --update nodejs npm
WORKDIR /var/www/html
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]