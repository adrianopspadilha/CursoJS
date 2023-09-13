function verificar() {
    //alert('funcionou')
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.lentght == 0 || Number(fano.value) > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'baby-boy-edit.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem-jovem-edit.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adult-man-edit.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'homem-idoso-edit.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'baby-girl-edit.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher-jovem-edit.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adult-woman-edit.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'mulher-idosa-edit.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}