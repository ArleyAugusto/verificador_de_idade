function verificar() {
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[Erro] verifique os dados e tente novamente!!')
    }
}