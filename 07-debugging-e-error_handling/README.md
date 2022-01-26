# Tipos de erros
## ECMAScript Error
   Erros que ocorrem em tempo de execução.</br>

![image](https://user-images.githubusercontent.com/55243757/151229679-2da63a92-1541-42ac-a474-7d57701702d7.png)</br>

   <b>Composto por:</b>
   - Mensagem
   - Nome
   - Linha
   - Call Stack</br>

![image](https://user-images.githubusercontent.com/55243757/151229944-72f2745a-eb47-429d-b89c-dfde7dbb05e7.png)</br>

## DOMException
   Erros relacionados ao Document Object Model (DOM).</br>

![image](https://user-images.githubusercontent.com/55243757/151230141-a2ace01a-03a4-47e9-824f-7af3394868c2.png)</br>

# Tratando erros
## Throw
![image](https://user-images.githubusercontent.com/55243757/151231223-2d21b8d2-8603-4a42-a8a0-b157f24c5a9c.png)</br>

   - `Throw` lança um erro, enquanto o `return` retorna um valor.

![image](https://user-images.githubusercontent.com/55243757/151231483-0e8c811d-14bc-4083-9a2a-b447a2a833d0.png)</br>

## Try...catch
   Dentro do bloco `Try` são executadas instruições e caso ocorra algum erro durante o processo, ele será tratado no bloco `Catch`.</br>

   A vantagem do bloco `Catch` é a possibilidade de manipular o tratamento de um erro com maior flexibilidade.</br>

![image](https://user-images.githubusercontent.com/55243757/151232299-01526ff5-03a6-417b-9d88-81d4c5ce9fd8.png)</br>

![image](https://user-images.githubusercontent.com/55243757/151232944-5dd1de49-f8d8-44a6-a2e9-df67bffd9c73.png)</br>

## Finally
   É executada sempre, independente de erros ocorrerem ou não.</br>

![image](https://user-images.githubusercontent.com/55243757/151234174-9ded95f8-b0d9-4250-8345-47959f5f67c7.png)</br>

![image](https://user-images.githubusercontent.com/55243757/151235301-1fcec3a4-3a37-4abd-a3bf-95bf875c46f0.png)</br>

# Criando Error
## O objeto Error

   <b>Código:</b></br>

![image](https://user-images.githubusercontent.com/55243757/151237136-0353f7f4-7fb1-4e1b-acd5-b3fc54e3b8ce.png)</br>

   <b>Resultado:</b></br>

![image](https://user-images.githubusercontent.com/55243757/151237352-cc6f35ae-1a40-4308-9075-bc1d90dd2a41.png)

   O erro também pode ter um nome:</br>
   <b>Código:</b></br>

![image](https://user-images.githubusercontent.com/55243757/151237927-bf066dca-7466-4965-a37a-1547d928022e.png)</br>

   <b>Resultado:</b></br>
![image](https://user-images.githubusercontent.com/55243757/151238058-ba691e4f-3e88-4833-ab65-4b756ef8e840.png)