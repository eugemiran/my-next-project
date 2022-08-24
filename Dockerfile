#FROM --platform=linux/amd64 node:16-alpine
#FROM node:16-alpine
FROM public.ecr.aws/docker/library/node:18.7.0-alpine3.16
WORKDIR /usr/src/app
COPY . ./
RUN yarn
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
