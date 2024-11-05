
function atualizar() {
    var texto = window.document.querySelector('#txt')
    var foto = window.document.querySelector('#manha')
    var data = new Date()
    var hora = data.getHours()
    texto.innerHTML = `Agora são ${hora} horas.`
    
    if ( hora >= 0 && hora < 12 ) {
        foto.src = 'img/foto-manha.png'
        window.document.body.style.background = '#90ee90'
    } else if ( hora >= 12 && hora < 18 ) {
            foto.src = 'img/foto-tarde.png'
            window.document.body.style.background = '#ffa500'
           } else {
            foto.src = 'img/foto-noite.png'
            window.document.body.style.background = '#5555eb'
           }
}