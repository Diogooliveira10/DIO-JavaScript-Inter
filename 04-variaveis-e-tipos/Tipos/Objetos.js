let obj = {}
// undefined
typeof obj
// 'object'
obj.name = "Carol"
// 'Carol'
obj
// >{name: 'Carol'}
obj.age = 23
// 23
obj
// >{name: 'Carol', age: 23}
Object.values(obj)
// >(2) ['Carol', 23]
Object.keys(obj)
// >(2) ['name', 'age']


let person = {
    name: "Diogo",
    age: 27,
    adress: "street 2"
}

person
// >{name: 'Diogo', age: 27, adress: 'street 2'}
person.name
// 'Diogo'
person["name"]
// 'Diogo'
person["numberOfSiblings"] = 1
// 1
person
// >{name: 'Diogo', age: 27, adress: 'street 2', numberOfSiblings: 1}

let mom = "nameOfMom"
// undefined
person[mom] = "Leusa"
// 'Leusa'
person
// >{name: 'Diogo', age: 27, adress: 'street 2', numberOfSiblings: 1, nameOfMom: 'Leusa'}