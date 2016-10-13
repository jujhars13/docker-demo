#dockerfile

#using official node LTS repo
FROM node:6.5.0
MAINTAINER Jujhar Singh <jujhar@jujhar.com>

ADD ./ /app

#set environment variables for prod
ENV NODE_ENV development
ENV LOG_FILE_PATH /var/log
ENV LOG_LEVEL info
ENV NODE_PORT 8000

#this is the root folder we'll work from
WORKDIR /app

#entrypoint
ENTRYPOINT ["node index.js"]
