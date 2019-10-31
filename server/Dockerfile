FROM node:12.10.0-alpine
LABEL maintainer="Michael Dabydeen <mdabydeen@gmail.com>"

WORKDIR /app

COPY package.json /app/package.json

RUN npm install --silent

CMD ["node", "index.js"]
