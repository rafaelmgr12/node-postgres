FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3333

CMD ["npm","run", "dev"]

