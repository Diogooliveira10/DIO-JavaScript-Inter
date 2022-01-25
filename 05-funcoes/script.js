

function getAnimal(id) {
    switch(id) {
        case 1:
            return "Cão";
        case 2:
            return "Gato";
        case 3:
            return "Pássaro";
        default:
            return "Peixe";
    }
}

console.log(getAnimal(1))
// Cão
console.log(getAnimal(4))
// Peixe
console.log(getAnimal("1"))
// Peixe
console.log(getAnimal(2))
// Gato







