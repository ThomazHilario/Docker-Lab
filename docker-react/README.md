# Docker-React
- Dockerizando uma aplicação react+vite com docker.

# Dockerfile

# Imagem base com Node.js
- Utilizamos uma imagem do node que será usada no nosso container docker.
` FROM node:23-slim `

# Diretório de trabalho no container
- Entramos na pasta app.
` WORKDIR /app `

# Copia arquivos de dependência
- Copia os arquivos que tem o nome package para a pasta app.
` COPY package*.json ./ `

# Instala dependências
- Instala as dependência na pasta app.
` RUN npm install `

# Copia o restante do código
- Copia o restante dos arquivos para a pasta app.
` COPY . . `

# Expõe a porta usada pelo Vite
- Expondo a porta usada pelo vite.
` EXPOSE 5173 `

# Comando de desenvolvimento
- Criando comando de desenvolvimento para rodar o projeto.
` CMD ["npm", "run", "dev", "--", "--host"] `