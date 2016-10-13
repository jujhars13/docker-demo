#dockerfile

#using official node LTS repo
FROM node:6.5.0
MAINTAINER Jujhar Singh <jujhar@jujhar.com>

#environment variables
ENV NODE_PORT 8080

ADD app /app

#this is the root folder we'll work from
WORKDIR /app

#entrypoint
ENTRYPOINT ["node", "index.js"]
