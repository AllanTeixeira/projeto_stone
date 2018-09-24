
![enter image description here](https://www.ibliss.digital/wp-content/uploads/clients-stone.png)

Desafio
========

O projeto apresenta o cadastro de funcionários com a utilização do banco de dados relacional Mysql. A linguagem utilizada foi o Node e abaixo segue a lista de dependências utilizadas neste projeto:


* [Express](https://www.npmjs.com/package/express)
* [Mysql](https://www.npmjs.com/package/mysql)
* [Log](https://www.npmjs.com/package/log)
* [Morgan](https://www.npmjs.com/package/morgan)
* [EJS](https://www.npmjs.com/package/ejs)
* [CORS](https://www.npmjs.com/package/cors)
* [Parse-Body](https://www.npmjs.com/package/parse-body)

A ideia é torna o projeto prático, atender a todos os pré-requisitos do desafio e mostrar um código limpo com boas práticas de programação. Nós próximos tópicos tem o passo-a-passo de instalar o projeto e algumas alternativas para subir em algum servidor.


##Instalação 

#### 1 - Realizar o download no formato zip do Git ou simplesmente clonar o projeto. 
Basta adicionar a classe ao projeto e instancia-la:
```node
$ git clone git://github.com/AllanTeixeira/projeto_stone
```

#### 2 - Dentro da pasta do projeto você deve realizar o seguinte comando:

```node
npm.install
```
No arquivo package.json tem todas as informações pertinentes ao projetos e todas as dependências que precisam ser instaladas. Dando no comando acima este processo será feito automaticamente.

Em seguida será necessário ter uma base de banco de dados MYSQL e garantir que as portas 3000 e 3006 estejam liberadas se você quiser utilizar o projeto localmente.  Dentro do projeto na pasta Database o arquivo db.sql com as configurações para serem utilizadas na criação do banco de dados. 

#### 3 - Subindo o projeto

Existem algumas opções de colocar esse tipo de projeto no ar. A mais interessante na minha opinião é a “esteira”.  O Jenkins pega de um versionador(GIT) e compila, o que vai gerar um compilável do Node e do EJS, NG build. Gerando o arquivo “.dist”, é necessário colocar esse arquivo num servidor que suporte EJS e Node.

 No caso da Amazon, um S3 já resolveria o problema. Outra forma é utilizar uma máquina como servidor do banco de dados e apenas expondo o end-point do serviço.
 
É possível realizar testes localmente dos serviços do projeto, utilizando o Postman para acompanhar o retorno dos GET/POST para o Banco de dados. Outra possibilidade é utilizar o próprio CMD, para rodar o Node como Back-end na porta 3000. 


##Estrutura do Projeto
```node

- Public
 ---logo_stone.png
- Database/
     ---db.sql
- Controller/
   ---Controller.js
 - Views/ 
     --- Inicial.ejs
  - Pages/
     --- funcionarioEdit.ejs
     --- funcionarioList.ejs
- package.json
- app.js
```

##Métodos 
* `PUT()`: Faz a atualização das alterações de um determinado funcionário.
* `GET()`: Retorna uma lista de funcionário cadastrados com o seu nome, id, idade e cargo. 
* `Delete()`: Deleta um determinado funcionário do banco de dados.
* `POST()`: Salva um novo funcionário no banco de dados.

---
#Telas

#Tela Protótipo
![enter image description here](https://lh3.googleusercontent.com/-3ZP2iFVzeZc/W5lybGibShI/AAAAAAAAA4c/YYztJOIWC40PqAj2YENxsb1PNw1vKnAGACLcBGAs/s0/TELA+INICIAL.png "TELA INICIAL.png")

#Tela Inicial
![enter image description here](https://image.ibb.co/mi6a6e/TELA_INICIAL2.png)

#Tela De Funcionários Cadastrados
![enter image description here](https://image.ibb.co/g65DsK/tela_lista_de_funcion_rio_cadastrados.png)


##Tela Editar Funcionário
![enter image description here](https://lh3.googleusercontent.com/-2GdejjTsZAw/W5lyL7-WfhI/AAAAAAAAA4U/a94yC1lO3sodaaPGV9TZwQql0ZALH6cDwCLcBGAs/s0/tela+editar+funcionario.png "tela editar funcionario.png")
