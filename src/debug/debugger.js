
var a = 1

function hello() {
  let b = 2
  const c = 3

  if(true) {
    let d = 4
    debugger
  }
}

hello()

function anotherMoneyBox () {
  debugger
  let savedCoins = 0

  function countCoins (coins) {
    debugger
    savedCoins += coins
    console.log(`MoneyBox: $${savedCoins}`)
  }

  return countCoins
}

const myMoney = anotherMoneyBox()
myMoney(5)
myMoney(10)
myMoney(20)