
var n= window.document.querySelector('#numero')
var d1= window.document.querySelector('#display1')

var d2= window.document.querySelector('#display2')
var ds= window.document.querySelector('#display_soma')
var ddf= window.document.querySelector('#display_diferença')
var dm= window.document.querySelector('#display_multiplicar')
var ddv= window.document.querySelector('#display_dividir')

var c= window.document.querySelector('#clean')
var l= window.document.querySelector('#limpar')

function tabuada() {
    if (n.value == 0) {
        window.alert('campo vazio! entre com um nº inteiro no campo indicado.')
    } else {
        var numero= Number(n.value)
        var resultado= 0
        var x= 0
        d1.innerHTML= ``
        d2.style.display = 'flex'
        d2.style.flexWrap = 'wrap'
        d2.style.justifyContent = 'center'
        ds.style.display = 'block'
        ddf.style.display = 'block'
        dm.style.display = 'block'
        ddv.style.display = 'block'
        /*
        if (window.innerWidth <= 370) {
            ds.style.borderRight = 'solid 1px black'
            dm.style.borderRight = 'solid 1px black'
        }
        else {
            ds.style.borderRight = 'solid 1px black'
            ddf.style.borderRight = 'solid 1px black'
            dm.style.borderRight = 'solid 1px black'
        }
        */
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
            if ( numero % x == 0 ) 
                { ddv.innerHTML+= `${numero} / ${x} = ${resultado} <br>` }
            else 
                { ddv.innerHTML+= `${numero} / ${x} = ${resultado.toFixed(2)} <br>` }
            x++
        }
        l.style.display = 'block'
        l.style.margin = 'auto'
        l.style.padding = '10px'
        c.style.padding = '20px'
    }
}

function recomeçar() {
    // n.innerHTML= `` -> não funciona, não limpa o campo 
    n.value= ``
    d1.innerHTML= `Informe o número no campo acima indicado e clique em 'Gerar tabuada'.`
    ds.innerHTML= ``
    ds.style.display = 'none'
    ddf.innerHTML= ``
    ddf.style.display = 'none'
    dm.innerHTML= ``
    dm.style.display = 'none'
    ddv.innerHTML= ``
    ddv.style.display = 'none'
    l.style.display = 'none'
    /*
    ds.style.borderRight = 'none'
    ddf.style.borderRight = 'none'
    dm.style.borderRight = 'none'
    */ 
}
