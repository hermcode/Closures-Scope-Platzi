// JavaScript solo utiliza el hoisting en las declaraciones pero no en las inicializaciones
// Hoisting aplica solo para var y function

a = 2
var a
console.log(a)


function myName(name) { //DECLARATIVE function
  console.log(name)
}
myName('Max')

const lastName = (lastName) => { // ARROW function
  console.log(lastName)
}
lastName('Hermosillo')