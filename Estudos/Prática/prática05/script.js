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
    if(isNumero(num.value) && !inLista(num.value, vetor)){
        vetor.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    } else{
        alert('Valor inválido ou ja encontrado na lista!!')
    }
    num.value = ''
    num.focus()
}



function finalizar(){
    if (vetor.length == 0){
        alert('Adicione valores para analisar')
    }
    else{
        let tot = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        for ( let pos in vetor){
            if (vetor[pos] > maior){
                maior = vetor[pos]
            }
            if (vetor[pos] < menor){
                menor = vetor[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        
    }
}