FROM node as builder

WORKDIR /src

COPY package*.json /src/
RUN npm install

COPY . /src
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration=${configuration}


FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=builder /src/dist/out/ .