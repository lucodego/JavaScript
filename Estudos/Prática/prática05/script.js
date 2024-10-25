var num = document.getElementById('num')
    var tab = document.getElementById('tabela')
    var inf = document.getElementById('inf')
    var n = Number(num.value)
    var cont = cont++
    var vetor = []
    
function analisar(){
    
    if(isNumero(n) && !isLista(n)){
        vetor.push(n)
        var item = document.createElement('Option')
        item.innerHTML = `Valor ${n} adicionado`
        inf.appendChild(item)
    } else {
        alert('Digite um valor valido')
    }
}
function finalizar(){
    var res = document.getElementById('res')
    res.innerHTML = `Ao todo temos ${cont} números cadastrados`

}