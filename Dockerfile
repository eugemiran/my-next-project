#FROM --platform=linux/amd64 node:16-alpine
#FROM node:16-alpine
FROM public.ecr.aws/docker/library/alpine:latest
WORKDIR /usr/src/app
COPY . ./
RUN sudo apk add yarn
RUN yarn
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
