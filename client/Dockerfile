# 01- Build Stage
FROM node:24-alpine as build

WORKDIR /site
COPY package*.json ./

RUN npm install
COPY . .

RUN npm run build

# 02- Production stage
FROM node:24-alpine AS prod

WORKDIR /site
COPY --from=build ./site/dist ./dist

RUN npm install -g npm@latest && npm install -g serve
EXPOSE 3000

CMD ["npx", "serve", "-s", "dist", "-l", "3000"]
