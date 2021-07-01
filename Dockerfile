#Alpine node 14
FROM node:14.15.4-alpine3.12

#instalar a leitura de arquivos do tipo bash
RUN apk add bash

#criando usuário noe
USER node

#Diretório de trabalho
WORKDIR /home/node/app

#copiar o projeto

COPY . .