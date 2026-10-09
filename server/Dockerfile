FROM node:24-alpine

WORKDIR /site
COPY package*.json ./

RUN npm install -g npm@latest && npm install
COPY . .

EXPOSE 8858
CMD ["npm","start"]