FROM node:22-alpine

RUN npm install -g pnpm

WORKDIR /home/node/app

CMD [ "/bin/sh" ]