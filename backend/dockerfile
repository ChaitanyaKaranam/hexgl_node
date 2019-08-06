FROM node:8

# Create App directory
WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm run install

CMD ["npm", "start"]