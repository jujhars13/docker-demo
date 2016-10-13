#dockerfile

#using official node LTS repo
FROM node:6.5.0
MAINTAINER Jujhar Singh <jujhar@jujhar.com>

ADD app /app

#this is the root folder we'll work from
WORKDIR /app

#entrypoint
ENTRYPOINT ["node", "app.js"]
