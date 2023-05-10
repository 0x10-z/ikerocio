FROM node:18.16.0-alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY ./ikerocio/package.json /app
COPY ./ikerocio/package-lock.json /app

RUN npm ci --silent
RUN npm install -D postcss-cli --silent
#RUN npm install react-scripts@3.4.1 -g --silent

COPY ./ikerocio /app

RUN npm run build

# production environment
FROM node:18.16.0-alpine as production

WORKDIR /app

COPY ./ikerocio/package.json ./ikerocio/package-lock.json /app/

RUN npm ci --production

COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public

EXPOSE 3000

CMD ["npm", "start"]