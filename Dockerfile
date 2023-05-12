FROM node:18

WORKDIR /var/www/html
COPY . .
RUN npm install
CMD npm run serve