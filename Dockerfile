FROM node:14.17.6

WORKDIR /usr/app

COPY package.json ./

RUN npm install

RUN npx prisma migrate dev --name init --preview-feature

COPY . .

EXPOSE 3333

CMD ["npm","run", "dev"]

