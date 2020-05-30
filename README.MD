# TecFit
![Logo1](https://user-images.githubusercontent.com/24635144/83213547-c430e280-a138-11ea-874f-9f218a1bdd57.png)

Projeto para a cadeira de Laboratório de Software e Projetos.


Projeto finalizado e apresentado no dia: _DD/MM/2020_


## Sobre o Projeto:

A aplicação apresentra um site onde o usuario poderá acessar seus trenhos do dia e completa-los.

### Tecnologias:
* API: [Node Express](https://expressjs.com/pt-br/)

* Banco: [PostgreSQL](https://www.postgresql.org/)

* Nuvem: [Heroku](https://www.heroku.com/)

### Fluxo de processos(alterar esse nome)

Constitui em uma API onde fornece os endpoints de consulta ao banco, ao mesmo tempo hostea o site do cliente.
![explicação visual do fluxo de processos](https://user-images.githubusercontent.com/24635144/83213060-91d2b580-a137-11ea-8a7c-25722da8d351.png)


(Segmentar os fluxos quando implementar no site)

### "Leitura do código"
O código se inicia no Server.js onde configuramos as rotas e os endpoints
![print1](https://user-images.githubusercontent.com/24635144/83213093-a616b280-a137-11ea-86f7-d12a2a17cf7d.png)

As rotas do acesso da página estão definidas dentro do arquivo routes.js(link)
![print2](https://user-images.githubusercontent.com/24635144/83213132-bf1f6380-a137-11ea-9f2e-45f0beeb86ec.png)

Quando o endpoint é solicitado ele usa as querys que estão localizadas no arquivo PgSelects.js(link)
![print3](https://user-images.githubusercontent.com/24635144/83213141-c8a8cb80-a137-11ea-85ed-b19b42699ba1.png)

Para que a consulta do banco seja feita precisamos configurar a conexão, que está no arquivo dbconfig.js(link)
![print4](https://user-images.githubusercontent.com/24635144/83213157-d3636080-a137-11ea-983e-c180137a73e7.png)


Feito por:

![logo lateral](https://user-images.githubusercontent.com/24635144/83213346-4a98f480-a138-11ea-9313-7e269714f76a.png)
