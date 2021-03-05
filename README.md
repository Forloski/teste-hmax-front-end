# Front-End  Angular Teste HMax
> Front-end que consume CRUD da API criada no back-end

Front-End desenvolvido em Angular com objetivo de consumir CRUD de uma entidade de produtos e autenticação/autorização para a usuários. 
Foi desenvolvida como parte do teste requisitado pela HMax.


## Configuração para Desenvolvimento
Instalar as dependências com:
```sh
npm install 
```

Para inicializar a API:
```sh
ng serve
```
## Detalhes

Esse front-end não foi finalizado.
Foi uma tentativa minha de criar o front-end mesmo sem nenhum conhecimento prévio de Angular. Essa foi a primeira vez que vi algo em Angular e também a primeira vez que tentei programar algo em Angular. Existem diversos erros e claramente não representa um projeto feito com conhecimento do Framework.

O projeto faz autenticação usando a rota "{host}/login", onde ele verifica com a API se o usuário existe, gerando um JWT com 1d de duração. Após isso ele salva o usuário/JWT no cachê do browser.

Por falta de roteamento ele não vai para a rota "{host}/home" mas após o login feito, e JWT/user salvos, ele fica acessivel e consegue fazer chamadas para a API.

A rota "/home" cria uma tabela (feita usando Material UI) onde apresenta o Nome/Descrição/Preço dos produtos e dois botões, um para editar e outro para delete, ambos funcionando. Há também um botão para criação de um novo produto. 

O esqueleto do front-end funciona e se comunica com a API.

Faltam:

Roteamento entre as diferentes páginas.
Autorização relativa as permissões de cada usuário.
Melhoria na apresentação do front-end. Devido a minha dificuldade em usar Angular essa parte foi deixada em segundo plano, precisava ter as outras partes do sistema funcionando antes de "embelezar" o projeto.
