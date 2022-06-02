
/**
 * !Primitives values such as: 
 * * numbers, booleans, strings, undefined, null and symbol
 * all those are passed by value and can be independent variables
 * 
 * !Reference Types such as:
 * * arrays, objects, and classes 
 * those are passed by reference
 */

let a = [1, 2] 
let b = a
b.push(3)

console.log(a)

let c = [2, 3] // 0x01
let d = c // 0x01
d = [4, 5, 6] // 0x02

console.log(c)

console.log(`c === d : ${c === d}`)


let e = [1, 2]
console.log(`e = ${e}`)
console.log(`e = ${e}`)

function add(array, element) {
  array.push(element)
}

const f = [1, 2] // 0x03
f.push(3) // 0x03 still being the same memory reference, that's why we can change it
console.log(f)