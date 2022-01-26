# Assincronicidade
## Definição
   "Que não ocorre ou não se efetiva ao mesmo tempo."</br>

   - O Javascript roda de maneira <b>síncrona.</b>

## Promises
   Objeto de processamento assíncrono.</br>

   - Inicialmente, seu valor é desconhecido. Ela pode, então, ser <b>resolvida</b> ou <b>rejeitada</b>.
   - Uma promisse pode ter 3 estados:</br>
        1. Pending</br>
        2. Fulfilled</br>
        3. Rejected</br>
   - É necessário utilizar o operador `await` para obter seu resultado.
    
   <b>Estrutura:</b></br>

![image](https://user-images.githubusercontent.com/55243757/151249256-7b4ba3f6-fad2-4e87-9049-dd1aef6cb291.png)</br>

   <b>Manipulação:</b></br>

![image](https://user-images.githubusercontent.com/55243757/151250057-1db520b0-d986-4056-9561-bfaf58f1aa9b.png)</br>

   - `Await` é um operador específico para lidar com Promises.

## Async/await
   Funções assíncronas precisam dessas duas palavras chave.</br>

![image](https://user-images.githubusercontent.com/55243757/151255322-97133c76-1b01-4eb1-99c6-c343c23480c8.png)</br>

   <b>Utilizando</b> `try...catch`</br>

![image](https://user-images.githubusercontent.com/55243757/151256002-245bfc51-c229-4ea1-ba2e-c15db17e93ad.png)</br>

# Consumindo APIs
## O que são APIs
   <b>Application Programing Interface</b>, é uma interface que possibilita a comunicação entre plataformas.</br>

   - Uma API é uma forma de intermediar os resultados do back-end com o que é apresentado no front-end.
   - Conseguindo acessá-la por meio de URLs.</br>

   <b>JSON:</b> Acrônimo para JavaScript Object Notation, é um formato de troca de informações, muito utilizado na comunicação de front-ends com APIs.</br>

![image](https://user-images.githubusercontent.com/55243757/151256914-9acf04ca-2c48-4d73-8a0e-4fea40e69cb5.png)</br>

   - É muito comum que APIs retornem seus dados no formato .json, portanto precisamos tratar esses dados quando os recebermos.

## Fetch
   Consumindo APIs

![image](https://user-images.githubusercontent.com/55243757/151257434-2a1915f5-2f0c-44cc-a777-89359dafce57.png)</br>

   - Operações no banco (POST, GET, PUT, DELETE, etc)

![image](https://user-images.githubusercontent.com/55243757/151257956-0e4b3ef9-810c-4d3d-91c9-c36d838f3a8d.png)![image](https://user-images.githubusercontent.com/55243757/151258145-a033d64a-5ca6-40d5-a67c-5207c94552f7.png)