const prompt = require('prompt-sync')()

var valueN = Number(prompt(` Qual o valor de N `)) ;
var count = 1
var index = 1

for (var index = 1 ; index <= valueN; index++) {
    if (index % 2 !== 0) {
        console.log(index);
        count = count + index;
    }
}
console.log(`a soma dos numeros e ${count}`)

var valueA = Number(prompt('Digite o valor de A'))
var valueB = Number(prompt('Digite o valor de B'))

var count = valueA + valueB

for (var index = 1 ; index <= count; index++) {
if (index % 2 !== 0) {
     console.log(index);
     count = count + index;
}
 }
console.log(`a soma dos números é ${count}`)
