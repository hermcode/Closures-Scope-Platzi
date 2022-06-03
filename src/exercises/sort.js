// 'Carlos'

function sortingElements(arr) {


  return arr.sort((a,b) => {
    if(typeof a && b === 'string') {
      a.charCodeAt(a.length) - b.charCodeAt(b.length)
    } else {
      a - b
    }
  })
}

const names = ['Carlos', 'Juan', 'Carlos', 'Pedro']
const numbers = [0,1,1,0,2,3,4,5,2]

console.log(sortingElements(names))
console.log(sortingElements(numbers))