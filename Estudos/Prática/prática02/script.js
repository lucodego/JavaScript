function verificar() {
    var agora = new Date()
    var anoatual = agora.getFullYear()
    var ano = document.getElementById('ano')
    var res = document.getElementById('res')

    if (ano.value.length == 0 || ano.value > anoatual){
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = anoatual - Number(ano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if (fsex[0].checked){
                gen = 'Homem'
                if(idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute('src', 'cri-m.png')
                } else if (idade < 20){
                    //jovem
                    img.setAttribute('src', 'ado-m.png')
                } else if(idade < 50){
                    //adulto
                    img.setAttribute('src', 'adu-m.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'idos-m.png')
                }
            }else if(fsex[1].checked) {
                gen = 'Mulher'
                if(idade > 0 && idade < 10){
                    //criança
                    img.setAttribute('src', 'cri-f.png')
                } else if (idade < 20){
                    //jovem
                    img.setAttribute('src', 'ado-f.png')
                } else if(idade < 50){
                    //adulto
                    img.setAttribute('src', 'adu.png')
                } else {
                    //idoso
                    img.setAttribute('src', 'idos-f.png')
                }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
