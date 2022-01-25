

const user = {
    id: 27,
    displayName: 'Di',
    fullName: {
        firstName: 'Diogo',
        lastName: 'Oliveira'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(userId(user))
// 27
console.log(getFullName(user))
// Diogo Oliveira

