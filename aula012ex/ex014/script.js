function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    //let hora = data.getHours()
    let hora = 10
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12){
        img.src = "manha-edit.jpg"
        document.body.style.background = '#C26936'
    } else if (hora >= 12 && hora <= 18){
        img.src = "tarde-edit.jpg"
        document.body.style.background = '#1E4D6B'
    } else {
        img.src = "noite-edit.jpg"
        document.body.style.background = '#08254A'
    }
}