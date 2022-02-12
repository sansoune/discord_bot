FROM node:16

WORKDIR /home/bot
COPY package*.json ./
RUN npm i
COPY ./src ./src

# CMD ["node", "./src/index.js"]