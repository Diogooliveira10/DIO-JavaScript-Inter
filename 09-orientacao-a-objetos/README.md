# Compreendendo Orientação a Objetos
## Paradigmas
   Os programs são `objetos` que possuem uma série de propriedades.</br>

   <b>Pilares:</b>
   - Herança: O objetos filho que herda propriedades e métodos do objeto pai. Classes descendentes herdam características de suas classes ascendentes.</br>
   - Polimorfismo: Objetos podem herdar a mesma calsse pai, mas se comportarem de forma diferente quando invocamos seus métodos. O conceito de que classes mais complexas herdem métodos de classes mais abstratas e os executem à sua maneira.</br>
   - Encapsulamento: Cada classe tem propriedades e métodos independentes do restante do código. Propriedades e métodos de uma classe dizem respeito apenas a ela.</br>
   - Abstração: "Processo mental que consiste em isolar um aspecto determinado de um estado de coisas relativamente complexo, afim de simplificar a sua avaliação, classificação ou para permitir a comunicação do mesmo." Diminuir complexidade.</br>

# Orientação a Objetos em JavaScript
## Protótipos
   Todos os objetos Javascript herdam propriedades e métodos de um `prototype`.</br>
   O objeto `Object.prototype` está no topo desta cadeia.</br>

   - Protótipos são responsáveis pelo conceito de Herança em Javascript.

![image](https://user-images.githubusercontent.com/55243757/151360764-9669970d-7e70-4e08-9724-e2d807226537.png) ![image](https://user-images.githubusercontent.com/55243757/151361137-b8c15434-9432-41f3-9ff9-3bb9f85976b9.png)</br>

   Cadeia de protótipos (protorype chain)</br>

![image](https://user-images.githubusercontent.com/55243757/151361470-17eb2010-8027-4b73-bb46-865ccbce6e58.png)

## Classes
   <b>Syntatic sugar:</b> uma sintaxe feita para facilitar a escrita</br>

![image](https://user-images.githubusercontent.com/55243757/151362142-a481ee9c-87e4-48b0-9947-ac47b99ae200.png) ![image](https://user-images.githubusercontent.com/55243757/151362638-3028517f-0502-4d8e-b4d7-05880e676e50.png)</br>

   Javascript não possui classes nativamente. Todas ass classes são objetos e a herança se dá por protótipos.</br>

![image](https://user-images.githubusercontent.com/55243757/151364083-50f82e3d-68de-434f-ac06-2f63a0488eb1.png) 

   * <b>Getters</b> e <b>Setters</b> são utilizados como modificadores de um valor.
   * Por convenção devem ser nomeados com o sinal `_` (ex: _type)

![image](https://user-images.githubusercontent.com/55243757/151364617-eee86d4d-5e0e-4b53-8f71-4a2390923ff2.png)

   * O método `super()` pode ser utilizado em classes que herdam propriedades de outras;
   * Ele passa os argumentos enviados para a classe ascendente.