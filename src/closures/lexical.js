
function buildCount (i) {
  let count = i

  function displayCount () {
    console.log(++count)
  }

  return displayCount
}

/** Primer alcance */
const myCount = buildCount(1)
myCount()
myCount()
myCount()

/** Nuevo alcance */
const anotherCount = buildCount(5)
anotherCount()
anotherCount()
anotherCount()