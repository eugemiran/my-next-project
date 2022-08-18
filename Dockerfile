#FROM --platform=linux/amd64 node:16-alpine
FROM node:16-alpine
WORKDIR /usr/src/app
COPY . ./
RUN yarn
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
