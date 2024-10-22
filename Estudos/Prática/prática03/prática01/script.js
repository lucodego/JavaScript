function clicou(){
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        alert('Erro!! Faltam dados')
    } else {
        res.innerHTML = 'Contando ... '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        if(i < f){//crescente
        for(var c = i; c <= f; c += p ){
            res.innerHTML += `${c} \u{1f449}`
            }
        } else{//decrescente
            for(var c = i; c >= f; c -= p )
                res.innerHTML += `${c} \u{1f449}` 
        }
        res.innerHTML += '\u{1f3c1}'
    }
}