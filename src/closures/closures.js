

function moneyBox (coins) {
  let savedCoins = 0
  savedCoins += coins
  console.log(`MoneyBox: $${savedCoins}`)

}

moneyBox(5)
moneyBox(10)

function anotherMoneyBox () {
  let savedCoins = 0

  function countCoins (coins) {
    savedCoins += coins
    console.log(`MoneyBox: $${savedCoins}`)
  }

  return countCoins
}

const myMoney = anotherMoneyBox()
myMoney(5)
myMoney(10)
myMoney(20)