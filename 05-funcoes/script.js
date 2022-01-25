

const pessoa = {
    firstName: "Diogo",
    lastName: "Oliveira",
    id: 1,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function() {
        return this.id;
    }
};

console.log(pessoa.fullName());
// Diogo Oliveira
console.log(pessoa.getId());
// 1


