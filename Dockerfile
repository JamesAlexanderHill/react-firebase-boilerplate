FROM node:16-alpine As build
WORKDIR /app
COPY ./client/package*.json .
RUN npm ci
COPY ./client .
RUN npm run build

FROM node:16-alpine As production
WORKDIR /app
COPY ./server/package*.json .
RUN npm ci
COPY ./server .
COPY --from=build /app/build ./public