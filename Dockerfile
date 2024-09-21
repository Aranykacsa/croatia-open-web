#docker commands:
#docker build -t croatia-open-web .
#docker run -p 3000:3000 croatia-open-web

FROM node:18

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "build"]
