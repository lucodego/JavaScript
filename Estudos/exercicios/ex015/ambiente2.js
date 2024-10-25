var num = [5, 3, 6, 3, 8, 7]

/*
for(var c = 0; c < num.length; c += 1){
    console.log(`A posição ${c} tem valor ${num[c]}`)
}
console.log('--------------------')
var pos = 0
while(pos < num.length){
    console.log(num[pos])
    pos++
}
*/

//Forma mais simplificada
var pos = 0
for(pos in num){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}
console.log(num.indexOf(9))
