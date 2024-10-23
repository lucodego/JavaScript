let num = [5, 8, 9, 3]
num[3] = 2
num.push(10)
console.log(`Nosso vetor é o ${num}`) //retorna string
console.log(num) //retorna o array
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)  // mostra o valor do segundo elemento
console.log(num.sort()) //retorna o array em ordem crescente(colocando o .sort() muda também os valores em relação as chaves)
console.log(`Com o .sort() o primeiro valor se torna ${num[0]}`)
