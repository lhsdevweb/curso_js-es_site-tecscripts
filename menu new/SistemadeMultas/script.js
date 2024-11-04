
function AnalisarVelocidade() 
{
    var v = window.document.querySelector('#speed')
    var rv = window.document.querySelector('#display-v')
    var s = Number(v.value)
    rv.innerHTML = `<p>Sua velocidade atual é de <strong>${s}Km/h</strong>.</p>`
    if ( s > 60 ) 
    {
        rv.innerHTML += `<p>Velocidade màxima ultrapassada de <strong>60Km/h</strong>. Você será <strong>multado!</strong></p>`
    }
    rv.innerHTML += `<strong>Use sempre o cinto de segurança!!! </strong>`
    rv.innerHTML += `<strong>Se beber não dirija!!!</strong>`
}

function AnalisarNacionalidade()
{
    var c = window.document.querySelector('#country')
    var rn = window.document.querySelector('#display-n')
    rn.innerHTML = `Você nasceu no <strong>${c.value}</strong>. / `
    if ( c.value == 'Brasil' || c.value == 'brasil' || c.value == 'BRASIL' ) {
            rn.innerHTML += `Nacionalidade: <strong>Brasileiro</strong>.`
        } else {
            rn.innerHTML += `Nacionalidade: <strong>Estrangeiro</strong>.`
        }
}
