FROM node:alpine3.18 
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 4000
#run the application
CMD [ "npm", "run", "start" ]