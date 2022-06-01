/* Block Scope */

function fruits () {
  /** Hoisting
   * var fruit1
   * var fruit2
   * var fruit3
  */

  if(true) {
    var fruit1 = 'apple'
    var fruit2 = 'kiwi'
    var fruit3 = 'banana'
  }

  console.log(fruit1)
  console.log(fruit2)
  console.log(fruit3)
}

fruits()

/* =====USANDO LET Y CONST===== */
function altFruits () {
  /** Hoisting
   * var fruit1
  */
  if(true) {
    var fruit1 = 'apple'
    let fruit2 = 'kiwi'
    const fruit3 = 'banana'

    console.log(fruit2)
    console.log(fruit3)
  }

  console.log(fruit1)
  // console.log(fruit2) * No funciona
  // console.log(fruit3) * No funciona
}

altFruits()

/** ===== LET ===== */

let nombre
let x = 1
{
  nombre = 'hermcode'
  let x = 2

  console.log(x)
}

console.log(nombre)
console.log(x)

function foo () {
  
  for(var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }

  for(let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000)
  }
}

foo()