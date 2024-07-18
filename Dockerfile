FROM node:18-alpine AS base
RUN apk update && apk add --no-cache openssl-dev
WORKDIR /app
COPY package*.json  ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]