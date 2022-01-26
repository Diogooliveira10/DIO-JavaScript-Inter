function getAdmins(map) {

    let admins = [];
    
    for([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    
    return admins;
}

const usuarios = new Map();

usuarios.set('Diogo', 'Admin');
usuarios.set('Caroline', 'Admin');
usuarios.set('Luiz', 'User');
usuarios.set('Stephany', 'Admin');

console.log(getAdmins(usuarios));