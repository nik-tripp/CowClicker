# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./interview-client/package*.json ./
RUN npm install
COPY ./interview-client .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/shar/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
