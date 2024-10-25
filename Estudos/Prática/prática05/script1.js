let num = document.getElementById('num')
let lista = document.getElementById('')
let res = document.getElementById('inf')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function finalizar(){
    if (isNumero(num.value) && inLista(num.value, valores)){
        alert('Tudo ok')
    } else{
        window.alert('Valor inválido ou já encontrado na lista')
    }

}