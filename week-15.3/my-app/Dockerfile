FROM node:16-alpine

WORKDIR /nextapp

COPY package* .
RUN npm install

COPY . .

CMD [ "npm",'run','dev' ]