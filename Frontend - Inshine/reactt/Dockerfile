FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]




# notejam web app

FROM node:14-alpine3.16
MAINTAINER Atul Patil <atul.patil@xenonstack.com>
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]


