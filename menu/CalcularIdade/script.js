
function verificar() {
    var data = new Date()
    var anoatual = Number(data.getFullYear()) 
    var anousuario = window.document.querySelector('#ano')
    var d = window.document.querySelector('#display')

    if (anousuario.value == 0 || anousuario.value > anoatual) {
        window.alert('ERRO: digite novamente!')
    } else {
        var sex = window.document.getElementsByName('rsexo')
        var idade = anoatual - anousuario.value
        var genero = ''
        var img = window.document.createElement('img')
        
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero = 'Masculino'
            if (idade >=0 && idade < 14) {
                //criança
                img.setAttribute('src', 'img/bebe-m.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'img/jovem-m.png')
                if (window.innerWidth < 600) {img.style.maxWidth = '70%'}
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'img/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idoso.png')
                if (window.innerWidth < 400) {img.style.maxWidth = '80%'}
            }
        } else {
            genero = 'Feminino'
            if (idade >=0 && idade < 14) {
                //criança
                img.setAttribute('src', 'img/bebe-f.png')
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'img/jovem-f.png')
                if (window.innerWidth < 600) {img.style.maxWidth = '70%'}
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'img/adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        d.style.textAlign = 'center'
        d.innerHTML = 
        `<p>Gênero: <strong>${genero}</strong> e Idade: <strong>${idade} anos.</strong></p><br>`
        d.appendChild(img)
    }
}
