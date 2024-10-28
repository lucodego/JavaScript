let num = document.getElementById('num')
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
    if(isNumero(num.value) || inLista(num.value, vetor)){
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)

    } else{
        alert('Valor inválido ou ja encontrado na lista!!')
    }
}

function finalizar(){
    
}