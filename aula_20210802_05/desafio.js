/*
Questionário
Resolver as questões abaixo com o date-fns
(caso queiram comparar, fazer as mesmas questões utilizando moment)
1) Obter diferença de dias entre 15/09/2010 e 10/06/2020
2) Obter diferença de meses entre 15/09/2011 e 28/06/2021
3) Adicionar 32 dias na data 20/03/2021
 */

const datFns = require('date-fns')
const moment = require('moment')
//1) Obter diferença de dias entre 15/09/2010 e 10/06/2020
let dataIni01 = new Date(2010, 08, 15)
let dataFim01 = new Date(2020, 05, 10)

let resultadoItem1 = datFns.differenceInDays(dataFim01, dataIni01)

console.log('A diferença de dias entre 15/09/2010 e 10/06/2020: ' + resultadoItem1)

//2) Obter diferença de meses entre 15/09/2011 e 28/06/2021
let dataIni02 = new Date(2011, 08, 15)
let dataFim02 = new Date(2021, 05, 28)

let resultadoItem2 = datFns.differenceInMonths(dataFim02, dataIni02)

console.log('A diferença de meses entre 15/09/2011 e 28/06/2021: ' + resultadoItem2)

//3) Adicionar 32 dias na data 20/03/2021
let data03 = new Date(2021, 02, 20)

let resultadoItem3 = datFns.addDays(data03, 32)

console.log('Adicionar 32 dias na data 20/03/2021: ' + resultadoItem3)
