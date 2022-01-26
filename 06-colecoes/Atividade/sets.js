const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    return [...mySet]; // se tornando elemento do Array
}

console.log(valoresUnicos(myArray));