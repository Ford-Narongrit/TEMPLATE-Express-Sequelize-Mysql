FROM node:18

WORKDIR /var/www/html

# install node_modules
COPY package.json ./
RUN npm install
RUN npm install -g nodemon

# copy local file
COPY . .

CMD npm run serve