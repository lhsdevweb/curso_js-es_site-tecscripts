
// testar usando letra

var n= window.document.querySelector('#numero')    
var d1= window.document.querySelector('#display1')
var d2= window.document.querySelector('#display2')
var vnumero= [] 

function inserirnumero() {
    if ( n.value < 1 || n.value > 100 ) {
        window.alert('ERRO: Entre com número de um(1) à cem(100).')
    } else {
        var numero= Number(n.value)
        var indice= vnumero.indexOf(numero)

        if ( indice == -1 ) { 
            vnumero.push(numero) 
            d1.innerHTML+= `Nº ${numero} adicionado. <br>`
            d2.innerHTML= ''
        } else { window.alert('ERRO: Número já existe! Entre com outro.') }
    } 
    n.value= '' // testar
    n.focus()   // testar
}

function finalizar() {
    // Total de números do vetor 
    var cont= 0
    for ( var indice in vnumero ) { cont++ }
    //d2.innerHTML= `Total de números: ${cont} <br><br>`
    d2.innerHTML= `<div style='margin-bottom:20px'>Total de números: ${cont}</div>`

    // Maior número do vetor 
    var aux= vnumero[0]
    for ( var indice= 1; indice < vnumero.length; indice++ ) { 
        if ( vnumero[indice] > aux ) {
            aux= vnumero[indice]
        }
    }
    d2.innerHTML+= `Maior número: ${aux} <br><br>`
    
    // Menor número do vetor 
    var aux= vnumero[0]
    for ( var indice= 1; indice < vnumero.length; indice++ ) { 
        if ( vnumero[indice] < aux ) {
            aux= vnumero[indice]
        }
    }
    d2.innerHTML+= `Menor número: ${aux} <br><br>`
    
    // Soma de todos os valores do vetor
    var aux= vnumero[0]
    for ( var indice= 1; indice < vnumero.length; indice++ ) { 
            // aux= aux + vnumero[indice] 
            aux+= vnumero[indice] // testar
    }
    d2.innerHTML+= `Soma total dos números: ${aux} <br><br>`

    // Média dos números do vetor
    var media= aux/cont
    d2.innerHTML+= `Média dos números: ${media.toFixed(2)}`
}

