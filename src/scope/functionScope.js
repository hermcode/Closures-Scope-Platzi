/* Function Scope */

function foo () {
  var x = 10
  var x = 20 // ! Mala practica

  let y = 5 // * Buena practica
  y = 6

  console.log(x)
  console.log(y)
}

foo()