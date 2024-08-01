
function tabuada() {
    var n= window.document.querySelector('#numero')
    var d1= window.document.querySelector('#display1')
    var d2= window.document.querySelector('#display2')
    var ds= window.document.querySelector('#display_soma')
    var ddf= window.document.querySelector('#display_diferença')
    var dm= window.document.querySelector('#display_multiplicar')
    var ddv= window.document.querySelector('#display_dividir')

    if (n.value == 0) {
        window.alert('campo vazio! entre com um nº inteiro no campo indicado.')
    } else {
        var numero= Number(n.value)
        var resultado= 0
        var x= 0
        d1.innerHTML= ``
        d2.style.display = 'flex'
        while (x <= 9) {
            resultado= numero + x
            ds.innerHTML+= `${numero} + ${x} = ${resultado} <br>`
            x++
        }
        x= 0
        while (x <= 9) {
            resultado= numero - x
            ddf.innerHTML+= `${numero} - ${x} = ${resultado} <br>`
            x++
        }
        x= 0
        while (x <= 9) {
            resultado= numero * x
            dm.innerHTML+= `${numero} x ${x} = ${resultado} <br>`
            x++
        }
        x= 0
        while (x <= 9) {
            resultado= numero / x
            ddv.innerHTML+= `${numero} / ${x} = ${resultado} <br>`
            x++
        }
    }
}
