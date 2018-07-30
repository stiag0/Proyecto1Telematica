FROM node:9.6.1

LABEL version="1.0"
LABEL description="Proyecto1"
LABEL maintainer="Santiago Alvarez Gomez-salvar30@eafit.edu.co"

ARG PORT=3000
ENV PORT $PORT

WORKDIR /P1NodeLoginMap1
COPY . ./

RUN npm install --test

EXPOSE 3000
CMD npm start