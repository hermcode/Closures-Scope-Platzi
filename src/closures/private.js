
const persons = () => {
  let saveName = 'Name'

  return {
    getName: () => {
      return saveName
    },
    setName: (name) => {
      saveName = name
    }
  }
}

const newPerson = persons()
console.log(newPerson.getName())
newPerson.setName('hermcode')
console.log(newPerson.getName())

// MONEDERO CON CLOUSURES Y VARIABLES PRIVADAS
const monedero = (money) => {
  let cash = money // cash es una variable privada

  return {
    deposit: (money) => {
      cash += money
      console.log(`Deposit: ${money} Balance: ${cash}`)
    },
    withdraw: (money) => {
      if(cash >= money) {
        cash -= money
        console.log(`Withdrawing: ${money} Balance: ${cash}`)
      } else {
        console.log('El retiro no se pudo realizar, no hay suficiente dinero')
      }
    }
  }
}

const miMonedero = monedero(0)
miMonedero.deposit(1000)
miMonedero.withdraw(800)

const miCuentaDeBanco = monedero(0)
miCuentaDeBanco.deposit(100)
miCuentaDeBanco.deposit(100)