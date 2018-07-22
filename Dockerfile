FROM node:9.6.1

LABEL version="1.0"
LABEL description="mapa con login en NodeJS"
LABEL maintainer="santiago alvarez - salvar30@eafit.edu.co"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /nodeApp
COPY . ./

RUN npm install --test

EXPOSE 3000
CMD npm start
