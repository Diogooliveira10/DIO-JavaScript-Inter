const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Jonas',
		nota: 3,
		turma: '2C',
	},
];

function alunosAprovado(array, media) {
    let aprovados = [];

    for (let index = 0; index < array.length; index++) {

        const { nota, nome } = array[index];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovado(alunos, 5))