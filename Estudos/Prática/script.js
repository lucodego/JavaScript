
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    //var hora = agora.getHours()
    var hora = 20
    msg.innerHTML = `<strong>Agora são ${hora}</strong>`
    if (hora >= 0 && hora < 12){
        img.src = 'dia.png'
        document.body.style.backgroundColor = '#ffde4a'
    } else if (hora > 18){
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#2b2857'
    } else{
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#ff7e33'
    }
}