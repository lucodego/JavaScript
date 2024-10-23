function gerar(){
    
    for(var c = 1; c <= 10; c += 1){
        var num = document.getElementById('num')
        var n = Number(num.value)
        var res = document.getElementById('seltab')
        var item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        res.appendChild(item)
    }
}