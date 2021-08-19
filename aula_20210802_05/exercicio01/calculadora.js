const somar = require('./somar')
const subtrair = require('./subtrair')
const multiplicar = require('./multiplicar')
const dividir = require('./dividir')

console.log('5 + 5 = ' + somar(5,5))
console.log('5 - 5 = ' + subtrair(5,5))
console.log('5 * 5 = ' + multiplicar(5,5))
console.log('5 / 0 = ' + dividir(5,5))