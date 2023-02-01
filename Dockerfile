FROM node:lts-alpine

WORKDIR /home/node/app

COPY node/. .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
