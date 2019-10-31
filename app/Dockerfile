# base image
FROM node:12.10.0-alpine

LABEL maintainer="Michael Dabydeen<mdabydeen@gmail.com>"

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent

# start app
CMD ["npm", "run", "start"]
