FROM node:16

WORKDIR /home/bot
COPY package*.json ./
RUN npm i
COPY ./src ./home/bot/src

CMD ["node", "./src/index.js"]