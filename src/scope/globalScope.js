
/* Scope Global*/
var hello = 'Hello'
let world = 'World'
const helloWorld = 'Hello World'

function printVariables() {
  console.log(hello)
  console.log(world)
  console.log(helloWorld)
}

printVariables()

/* ================== Malas practica ================== */
function foo() {
  globalVar = "I'm Global"
}

foo()
console.log(globalVar)

function boo() {
  anotherGlobalVar = anotherGlobalVar = "I'm another global var"
}

boo()
console.log(anotherGlobalVar)