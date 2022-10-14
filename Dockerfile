FROM node:14.19.0-buster
WORKDIR /app
COPY . .
RUN npm install --force
# RUN npm run dev
# RUN npm run start
RUN npm run build
RUN npm i -S serve

#ENV NODE_ENV development
#ENV API_URL http://localhost:8080/api

EXPOSE 8080
CMD ["npm", "start"]
