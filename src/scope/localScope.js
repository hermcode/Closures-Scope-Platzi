/* Local Scope 
  * Scope local en bloque
*/

var scope = "I'm global"

function foo () {

  var scope = "I'm local"
  function boo () {
    return scope
  }

  console.log(boo())
}

foo()
console.log(scope)