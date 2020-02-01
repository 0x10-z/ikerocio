FROM nginx:1.17.8-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY html /app

COPY nginx.conf /etc/nginx/conf.d