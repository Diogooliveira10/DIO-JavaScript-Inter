# Tipos de Função

## Estrutura
   Definição comum de uma função</br>

![image](https://user-images.githubusercontent.com/55243757/150981980-05d9e591-d018-464d-8577-929586755d2c.png)</br>

   Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.

![image](https://user-images.githubusercontent.com/55243757/150982358-e5fe95f1-c96b-467f-a46e-d335fe01ed29.png)</br>

   Quando invocamos o "return", a função para ser executada.

## Função Anônima
   Funções que representam expressões</br>

![image](https://user-images.githubusercontent.com/55243757/150982931-26873f90-0d63-47a7-bcc1-4d9fbd8672eb.png)</br>

   Uma variável pode armazenar uma função.

## Função autoinvocável
   IIFE (Immediately Invoked Function Expression)</br>

![image](https://user-images.githubusercontent.com/55243757/150983992-cacc1fde-77c2-418d-889c-8c3ef4fb9e45.png)</br>

   Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.

![image](https://user-images.githubusercontent.com/55243757/150984687-f4a1d622-e551-4c22-9f3d-d5e64401f14b.png)</br>

   Também pode ser utilizada com parâmetros ou armazenada em uma variável.

## Callbacks
   Uma função passada como argumento para outra.</br>

![image](https://user-images.githubusercontent.com/55243757/150985596-70a19cbc-74de-4dbd-95a2-8d05d364bb4f.png)</br>

   Utilizando callbacks, você tem maior controle da ordem de chamadas.

# Parâmetros
![image](https://user-images.githubusercontent.com/55243757/150987434-cb7250b2-7cd7-4e9b-a316-349b0057132b.png) ![image](https://user-images.githubusercontent.com/55243757/150987839-6ba04bf4-d873-452e-acd7-b2de4f4d9127.png)</br>

## Objeto "arguments"
![image](https://user-images.githubusercontent.com/55243757/150989186-af1b3574-09f8-4935-bcaa-f2579bd0ce0d.png)</br>
   
   Um array com todos os parâmetros passados quando a função foi invocada.

## Arrays
   <b>Spread:</b> uma forma de lidar separadamente com elementos</br>

![image](https://user-images.githubusercontent.com/55243757/150992173-161f4c80-6844-4524-b382-6e73a456d558.png)</br>

   O que era parte de um array se torna um elemento independente.

   <b>Rest:</b> combina os argumentos em um array</br>

![image](https://user-images.githubusercontent.com/55243757/150992661-336bad10-882b-46b3-b844-779d65710c9b.png)</br>

   O que era um elemento independente se torna parte de um array.

## Objetos
   Object Destructuring</br>

![image](https://user-images.githubusercontent.com/55243757/150993910-7fbdf989-9f37-4af2-aa07-4722d08f1acf.png)</br>

   Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.

# Loops

## if/else
![image](https://user-images.githubusercontent.com/55243757/150996058-8e70a5fe-1ed0-43dd-85b6-538ed24f4389.png)</br>

   Javascript <b>não tem elseif</b>, as palavras sempre estão espaçadas!</br>
![image](https://user-images.githubusercontent.com/55243757/150997626-c97c8759-b5a1-4586-927d-7e1702a1d3f7.png)</br>

## Switch/case
   - Equivale a uma comparação de tipo e valor (===)
   - Sempre precisa de um valor "default
   - Ideal para quando se precisa comparar muitos valores</br>

![image](https://user-images.githubusercontent.com/55243757/150998966-7045da49-d931-4d7c-94a6-4210a6eb62ea.png)</br>

## For
   Loop dentro de elementos interáveis (arrays, strings).</br>
![image](https://user-images.githubusercontent.com/55243757/151002251-c845c0cf-d21b-4b5f-8415-5d5fa3d9ba1b.png)</br>

## For...in
   Loop entre propriedades enumeráveis de um objeto.</br>
![image](https://user-images.githubusercontent.com/55243757/151003461-e4de26c1-583d-4a53-868b-87f178960b46.png)![image](https://user-images.githubusercontent.com/55243757/151003785-86aa575b-9d04-4f5f-bac2-26745bbe8c29.png)</br>

## For...of
   Loop entre estruturas iteráveis (arrays, strings).</br>
![image](https://user-images.githubusercontent.com/55243757/151004789-ebd53b6b-1e3d-4081-905a-6080858a0f79.png)
![image](https://user-images.githubusercontent.com/55243757/151005328-54ae3672-98d5-4263-84be-f2d0bb1fdfeb.png)</br>

## While
   Executa instruções até que a condição se torne falsa.</br>
![image](https://user-images.githubusercontent.com/55243757/151006091-3e650ae8-df0c-48ad-a6c7-93d7e01388c0.png)</br>

## Do...While
   Executa instruções até que a condição se torne falsa.</br>
   Porém <b>a primeira execução sempre ocorre.</b></br>
![image](https://user-images.githubusercontent.com/55243757/151006866-2ee890c0-2fce-4ab6-be86-475e1e49c40c.png)![image](https://user-images.githubusercontent.com/55243757/151007096-dedce927-bcb3-4cab-8fda-23b093bcef0c.png)</br>

# This
## O que é this?
   Apalavra reservada <b>this</b> é uma referência de contexto.</br>
   No exemplo, this refere-se ao objeto pessoa:</br>
![image](https://user-images.githubusercontent.com/55243757/151041295-d77d517f-3d9f-4d90-a219-efac25cf7420.png)</br>

   Seu valor pode mudar de acordo com o lugar no código onde foi chamada.</br>
![image](https://user-images.githubusercontent.com/55243757/151041798-f257ab54-f40e-444e-bc4d-376528aaddf5.png)</br>

## Call
   O método <b>call()</b> transforma o valor de `this` no do objeto enviado como primeiro parâmetro e aceita outros parâmetros separados por vírgulas. É reutilizável em outros objetos.</br>
![image](https://user-images.githubusercontent.com/55243757/151043354-61a5f5d2-dd5a-499d-8ffb-e10f14331eae.png)</br>

   É possível passar parâmetros para essa função separando-os por vírgulas.</br>
![image](https://user-images.githubusercontent.com/55243757/151043966-e6d58c79-c260-4d2c-8775-3c67273dee4d.png)</br>

## Apply
   O método <b>apply()</b> transforma o valor de `this` no objeto enviado como primeiro parâmetro e aceita outros parâmetros através de um array. É reutilizável em outros objetos.</br>
![image](https://user-images.githubusercontent.com/55243757/151044691-e9d2317c-eed4-410e-acae-1b9c50d145d2.png)</br>

   É possível passar parâmetros para essa função dentro de um array.</br>
![image](https://user-images.githubusercontent.com/55243757/151045153-a69b4689-c1db-41ec-8538-557f6dcfd172.png)</br>

## Bind
   Cria um clone de função na qual for invocado, designando a `this` o valor do objeto passado como parâmetro.</br>
![image](https://user-images.githubusercontent.com/55243757/151045836-ce2cb67d-b727-499e-9b00-437648d76cb7.png)</br>

# Arrow functions
## Sintaxe
![image](https://user-images.githubusercontent.com/55243757/151047256-f1e65b9f-d2e5-4c3d-84ef-e9e2bdfbebd1.png)</br>

   - Caso exista apenas uma linha, pode dispensar as chaves e o return.
   - Caso exista apenas um parâmetro, pode dispensar os parênteses.</br>
![image](https://user-images.githubusercontent.com/55243757/151047686-9cd8654f-f809-4766-8628-081e49fb34c1.png)![image](https://user-images.githubusercontent.com/55243757/151047829-afadb9c9-9c89-40ea-930e-9be59bdcbb0e.png)</br>

   Arrow function <b>NÃO</b> faz hoisting!

## Outras restrições
   - `this` sempre será o objeto global. Métodos para modificar seu valor não irão funcionar;
   - Não existe o objeto `arguments`;
   - O construtor (ex: new MeuObjeto()) também não pode ser utilizado.
