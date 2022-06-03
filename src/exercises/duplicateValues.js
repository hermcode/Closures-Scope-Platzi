
const names = ['Carlos', 'Juan', 'Carlos', 'Pedro']

const numbers = [0,1,1,0,2,3,4,5,2]

function wDuplicateValues(arr){
  const result = arr.reduce((acc, curr) => {
    if(!acc.includes(curr)) {
      acc = [...acc, curr]
    }

    return acc
  }, [])

  return result
}

console.log(wDuplicateValues(names))
console.log(wDuplicateValues(numbers))