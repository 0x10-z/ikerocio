FROM node:20.10.0-alpine

WORKDIR /app

COPY ./ikerocio/package*.json /app/

RUN npm install
RUN npm install -D postcss-cli

COPY ./ikerocio /app/

#RUN npm test
#RUN npm run build
#RUN npm run build:css

EXPOSE 3000

CMD ["npm", "run", "dev"]