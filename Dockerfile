FROM node:14-alpine AS builder
WORKDIR /app

ARG PORT
ARG REACT_APP_API_BASE_URL
ARG REACT_APP_PAYPALME_URL

ENV PORT=$PORT
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
ENV REACT_APP_PAYPALME_URL=$REACT_APP_PAYPALME_URL
ENV NODE_ENV=production

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:1.19-alpine AS server
COPY --from=builder ./app/build /usr/share/nginx/html