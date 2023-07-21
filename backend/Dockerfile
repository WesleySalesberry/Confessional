FROM node:lts-buster-slim AS development

WORKDIR /src
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm", "start"]