# Desafio Magalu

## Por que Node?
É a ferramenta que mais tenho familiaridade.

## Requisitos ##
Node https://nodejs.org/en/  
Yarn (Opcional) https://classic.yarnpkg.com/en/docs/install#windows-stable  
MySql https://dev.mysql.com/downloads/

## Instalação ##
Após clonar o repositório, utilize o comando via terminal  
`npm install` ou `yarn` para baixar os pacotes de dependências. 


## API ##
Utilizando o comando `yarn dev` a aplicação rodará no seguinte endereço:
`http://localhost:4500/`

** Observação: caso queira importar via postman os métodos disponíveis são:  

```sh
curl --location --request GET 'http://localhost:4500/schedules' \
--header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ir22pFtxtJf_a3uZGhAKDTCosLv4nRdOoVHZhx-zZ5U'  
```

``` sh
curl --location --request GET 'http://localhost:4500/schedules/1' \ 
--header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ir22pFtxtJf_a3uZGhAKDTCosLv4nRdOoVHZhx-zZ5U'  
```

``` sh
curl --location --request POST 'http://localhost:4500/schedules' \
--header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ir22pFtxtJf_a3uZGhAKDTCosLv4nRdOoVHZhx-zZ5U' \
--header 'Content-Type: application/json' \
--data-raw '{
    "send_date": "2021-06-06 10:30:00",
    "receiver": "Maria José",
    "message": "Frete grátis para você!",
    "message_type": "WHATSAPP"
}'
```

```sh
curl --location --request DELETE 'http://localhost:4500/schedules/6' \
--header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ir22pFtxtJf_a3uZGhAKDTCosLv4nRdOoVHZhx-zZ5U'
```



## Autenticação JWT
No header do postman utilizar:

key: `token`

value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.Ir22pFtxtJf_a3uZGhAKDTCosLv4nRdOoVHZhx-zZ5U`

## Banco de dados
O banco encontra-se no arquivo `db-magalu`. É necessário importar o script.


