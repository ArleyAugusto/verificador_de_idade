function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[Erro] verifique os dados e tente novamente!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // mesmo q criar img id foto em css
        if (fsex[0].checked) {
            genero = 'Homem'    
            if(idade >=0 && idade <10) {
                //crianca
                img.setAttribute ('src', 'nenem.jpg')
               
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute ('src', 'jovem.jpg')
               
            }
            else if (idade <50) {
                //adulto
                img.setAttribute ('src', 'adulto.jpg')
                
            }
            else {
                //idoso
                img.setAttribute ('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade <10) {
                //crianca
                img.setAttribute ('src', 'nenem2.jpg')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute ('src', 'jovem2.jpg')
            }
            else if (idade <50) {
                //adulto
                img.setAttribute ('src', 'adulto2.jpg')
            }
            else {
                //idoso
                img.setAttribute ('src', 'idoso2.jpg')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}