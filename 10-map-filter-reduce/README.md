# Map
## O que é
   Percorre o array e executa uma função em casa um de seus itens

   * Cria um novo array;
   * Não modifica o array original;
   * Realiza as operações em ordem.

## Sintaxe
![image](https://user-images.githubusercontent.com/55243757/151387184-ddc9592d-1628-4b68-b043-fe617ea22a72.png) ![image](https://user-images.githubusercontent.com/55243757/151389021-a0a5be8c-4ab2-4022-a7b9-ab748632445d.png)</br>

   <b>Callback:</b> função a ser executada em cada elemento.
   <b>thisArg(opcional):</b> valor `this` dentro da função de callback.

## Map vs forEach
   O retorno: o método `map` retorna um array, enquanto `forEach` retorna <b>"undefined"</b></br>

![image](https://user-images.githubusercontent.com/55243757/151388116-c719f9bd-9df8-4fa4-a2a9-3db8ed70abf6.png)</br>

   * Valor de retorno
   * Considere se o array auxiliar será necessário</br>

# Filter
## O que é
   Percorre um array e retorna outro contendo apenas os itens que passaram por determinada validação
 
   * Cria um novo array;
   * Não modifica o array original.

## Sintaxe
   <b>Parâmetros:</b></br>

![image](https://user-images.githubusercontent.com/55243757/151390513-dec68ae6-ae8c-447e-b240-adb96c24f7ff.png)</br>

   <b>Callback:</b> função a ser executada em cada elemento.
   <b>thisArg(opcional):</b> valor `this` dentro da função de callback.

   <b>Exemplo:</b></br>

![image](https://user-images.githubusercontent.com/55243757/151391521-e7d3e95b-5813-46cd-8017-746683e1ab0e.png)

# Reduce
## O que é
   Percorre um array e acumula o valor de cada operação para retornar um valor único no final

   * Executa uma função em todos os elementos do array, retornando um valor único;
   * Sempre retorna apenas um valor, que pode ou não ser um array.

## Sintaxe
![image](https://user-images.githubusercontent.com/55243757/151392344-b88153b8-84fe-4cec-8a5e-fe7245583fc6.png)</br>

   <b>Callback:</b> função a ser executada a partir do acumulador.
   <b>thisArg(opcional):</b> valor sobre o qual o retorno final irá atuar.

![image](https://user-images.githubusercontent.com/55243757/151392779-9f1d4c3d-f238-40cd-96d7-88f0494d16e6.png)</br>

   <b>accumulator:</b> acumulador de todas as chamadas de callbackFn.
   <b>currentValue:</b> elemento atual sendo acessado pela função.