let nome = "João"
// undefined
nome
// "João"
let sobrenome = "Pedro"
// undefined
typeof nome
// "string"
nome.concat(sobrenome)
// "JoãoPedro"
let concatenado = nome.concat(sobrenome)
// undefined
typeof concatenado
// "string"
concatenado.length
// 9


let exemplo = new String("blablabla") // usando String com letra "S" maiúscula, é convertido para objeto
// undefined
typeof exemplo
// "object"
exemplo
// String {"blablabla"}
exemplo.length
// 9


let vazio = ""
// undefined
typeof vazio // retorna uma string mesmo sem nada
// "string" 


nome
// "João"
nome[1]
// "o"
nome.length
// 4

concatenado
// "JoãoPedro"
concatenado = nome + " " + sobrenome
// "João Pedro"
concatenado = `${nome} ${sobrenome}`
// "João Pedro" 


let frase = "Olá, tudo bem?"
// undefined
frase.split("")
// >(14) ['O', 'l', 'á', ',', ' ', 't', 'u', 'd', 'o', ' ', 'b', 'e', 'm', '?']
frase.split(" ")
// >(3) ['Olá,', 'tudo', 'bem?']
frase
// "Olá, tudo bem?"
frase.includes("tudo")
// true
frase.startsWith("O")
// true
frase.startsWith("R")
// false
frase.endsWith("?")
// true
frase.replace(",","!")
// 'Olá! tudo bem?'
let stringModificada = frase.replace(",", "!")
// undefined
frase
// 'Olá, tudo bem?'
stringModificada
// 'Olá! tudo bem?'