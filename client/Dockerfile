FROM nginx

RUN apt-get install curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install nodejs

WORKDIR /app

COPY src src
COPY angular.json .
COPY package-lock.json .
COPY package.json .
COPY tsconfig.json . 
COPY tsconfig.app.json .

RUN npm ci
RUN npm install
RUN npm run ng build --prod

RUN mv dist/client/* /usr/share/nginx/html
RUN rm -rf /app/*

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]