FROM node:18.16.0-alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./ikerocio/package.json /app
COPY ./ikerocio/package-lock.json /app

RUN npm ci --silent
RUN npm install -D postcss-cli --silent

COPY ./ikerocio/ /app/

RUN npm run build

# production environment
FROM node:18.16.0-alpine as production

WORKDIR /app

COPY ./ikerocio/package.json ./ikerocio/package-lock.json /app/

RUN npm ci --production

COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public

COPY --from=build /app/next.config.js /app/next.config.js
COPY --from=build /app/i18n.json /app/i18n.json

EXPOSE 3000

CMD ["npm", "start"]