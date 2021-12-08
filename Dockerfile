FROM --platform=linux/amd64 node:16.3-alpine3.12

RUN apk add --no-cache python2 py-pip alpine-sdk

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/
RUN npm ci

COPY . /app

CMD [ "npm", "start" ]
