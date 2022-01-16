## Tipagem?
   A tipagem funciona como uma regra de uso de dados, quanto mais forte for a tipagem, mais obrigatório é a declaração do tipo de dado.
   A tipagem em JavaScript é fraca, a declaração dos dados acontece de modo dinâmico.

   Ex.: Ao criarmos uma variável com valor entre aspas (“valor”) o JavaScript já converte o dado para o tipo String.

   Tipagem Ex.: var numero = 1;
   // o JavaScript já converte o valor 1 para o tipo Number.

## Tipos primitivos
   As variáveis em JavaScript podem guardar tipos de dados que chamamos de tipos primitivos.

   Variáveis podem guardar valores dos tipos: Boolean; null; undefined; Number; String; Array; Object; Function.

## O que são váriáveis?
   São dados que variam.

## Declaração de variáveis
   Existem 3 modos de declarar as variáveis em JavaScript:

   VAR - escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

   LET - escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como null;

   CONST - escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado.

## Escopo
   O escopo em JavaScript define a limitação e visibilidade de um bloco de código.

   Escopo global – quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

   Escopo local – quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.

## Regras de Uso de Variáveis
  * Iniciar com letras, underscore _ ou cifrão $; Não iniciar com número.
    Ex.: var 1nome ❌
    var nome || var _nome ✔

  * Não usar espaços (use o camelCase ou _).
    Ex.: var nome completo ❌
    var nomeCompleto || var nome_completo ✔

  * Não usar palavras reservadas;
    Ex.: var function ❌

  * Declarar variáveis no topo do bloco de código.

## Atribuição
  O sinal de igualdade “=“ em JavaScript, significa atribuição.

  Ex.:
  como declarar: var nome = “meu nome”;
  como ler: variável nome recebe o valor meunome;

## Comparação
  Para fazermos uma comparação de valores em JavaScript usamos “==“.

  Ex.:
  como declarar: "0" == 0; ;
  como ler: “0” tem o valor igual a 0?

  // nesse caso retorna true

## Comparação idêntica
  Para fazermos uma comparação de valores e tipos em JavaScript usamos “===“.

  Ex.:
  como declarar: "0" === 0; ;
  como ler: “0” tem o valor e o tipo idêntico a 0?

  // nesse caso retorna false

## Operadores aritméticos
  São tipos de operadores matemáticos com valor numérico:

  • + adição;
  • - subtração;
  • * multiplicação;
  • / divisão real;
  • % divisão inteira;
  • ** potenciação;

## Operadores relacionais
  São tipos de operadores que consultam a relação entre valores:

  • > maior que;
  • < menor que;
  • >= maior ou igual a;
  • <= menor ou igual a;

## Operadores lógicos
  São tipos de operadores que consultam valores lógicos:

  • && - “e” – considera que todos os valores sejam true;
  • || - “ou” – considera que qualquer valor seja true;
  • ! - “não” – inverte o valor de true para false ou vice-versa;