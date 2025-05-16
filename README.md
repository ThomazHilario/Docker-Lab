# Entendendo o Docker
- É um serviço de virtualização, que contém todas as dependências necessárias para executar uma aplicação.
- Cada aplicação são separadas em container.
- Cada container tem uma parte dos recursos da máquina do usuário.

# Porque utilizar docker ?
- Bem imagine um cenário em que você tenta rodar uma aplicação mas não consegue porque tem algo ali em questõe de versões das ferramentas que te impedem de rodar a aplicação em sua máquina. 
- Porem com o docker, como a aplicação vai ser virtualizada e terá um ambiente totalmente configurado/virtualizado para executar a aplicação não haverá  problemas em executar a aplicação pois tudo com base em versões e dependências estarão já configurados e prontos para a execução.

# Conceitos Básicos:
## DockerFile
- Arquivo que terá na aplicação com todas as configurações necessárias para criar a imagem no docker.

## Container
- Instancia de uma imagem.
- Ambiente executando.
- Quando criamos um container iniciamos um processo na máquina hospedeira.
- Caso não tenha nenhum processo rodando dentro de um container ele será encerrado.

## Imagem
- Uma imagem do docker ela vai conter tudo que é necessário para executar a aplicação.

## Registros
- Lugares onde armazenam as imagens, para que essas imagens possam ser utilizadas depois por outras pessoas.


# Comandos Básicos do docker:
- Verificar todos os containers em execução na máquina do hospedeiro:
` docker ps `
- Verificar todos os container que estão em execução ou não na máquina do hospedeiro:
` docker ps -a `
- Para executar uma imagem utilizamos:
` docker run nome-da-imagem `
- Para executar uma imagem passando nome do container + a porta de execução utilizamos:
` docker run --name nome-para-o-container -p 3000:3000 nome-da-imagem`
- Para parar todos os processos em um container utilizamos:
` docker stop container-id `
- Para iniciar um container utilizamos:
` docker start container-id `
- Podemos interagir com um container utilizando:
` docker exec -iti container-id (processo que ira rodar no container, Ex: bash) `
- Comandos de build de uma aplicação, cria uma imagem em relação a um arquivo de dockerfile:
` docker build -t nome-da-imagem `