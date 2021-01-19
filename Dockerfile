FROM node:14.7.0-alpine

RUN apk update && \
  apk add --no-cache nginx
RUN yarn global add pm2

WORKDIR /usr/src/wakanda

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

RUN apk add bash
COPY bin/start.sh ./bin/start.sh
RUN chmod +x ./bin/start.sh
COPY nginx.conf /etc/nginx/conf.d/wakanda.conf
COPY backend ./backend
COPY frontend ./frontend

RUN yarn build:backend

ENTRYPOINT [ "./bin/start.sh" ]
