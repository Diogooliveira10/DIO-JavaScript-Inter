function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa = {
    nome: "Caroline",
    idade: 23
};

const pessoa2 = {
    nome: "Mariana",
    idade: 27
};

const animal = {
    nome: "Belinha",
    idade: 7,
    raca: 'Poodle'
};

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.apply(animal, [4]));
console.log(calculaIdade.apply(pessoa, [11]));