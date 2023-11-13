FROM node:20.9.0
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
