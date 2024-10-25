let num = document.getElementById('num')
let numero = Number(num)
let tab = document.getElementById('inf')
let res = document.getElementById('res')
let vetor = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function analisar(){
    if(isNumero(numero) && inLista(numero, vetor)){
        alert('Tudo ok')
    } else{
        alert('Valor inválido ou ja encontrado na lista!!')
    }
}