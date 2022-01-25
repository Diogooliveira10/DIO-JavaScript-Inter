

const retornaNomes = function() {
    return this.nome;
};

let stephany = retornaNomes.bind({ nome: 'Stephany' });

console.log(stephany());
// Stephany


