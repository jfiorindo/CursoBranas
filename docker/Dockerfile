#linha que define a imagem que irá rodar em nosso container
FROM node:22-slim 
#essa linha abaixo é para instalar o curl dentro do container
RUN apt-get update && apt-get install -y\
    curl
#essa linha define a criação da pasta /app
WORKDIR /app
