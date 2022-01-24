let array = []
// undefined
array.push(3)
// 1
array
// >[3]
array.push(2)
// 2
array
// >(2) [3, 2]
array.pop()
// 2
array
// >[3]
array.push(2)
// 2
array.push(5)
// 3
array.shift()
3
array
// >(2) [2, 5]
array.unshift(1)
// 3
array
// >(3) [1, 2, 5]