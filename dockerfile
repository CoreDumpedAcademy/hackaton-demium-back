FROM node:10
WORKDIR /app
COPY package.json package.json
COPY app.js app.js
COPY server.js server.js
COPY controllers controllers
COPY routes routes
COPY models models
RUN npm install
EXPOSE 3000
RUN npm install
CMD [ "npm", "start" ]
