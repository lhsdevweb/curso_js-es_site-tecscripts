
function calcular() {
    // pode ser 'var' ou 'let' (JS atual)
    // as variáveis que recebem nº através dos objetos DOM ainda permanecem do tipo texto
    var i= window.document.querySelector('#inicio')
    var f= window.document.querySelector('#final')
    var p= window.document.querySelector('#passo')
    var d= window.document.querySelector('#display')

    if (inicio == 0 || final == 0) {
        window.alert('ERRO: campo(s) incompleto(s)! digite novamente.')
    } else {
        var inicio= Number(i.value)
        var final= Number(f.value)
        var passo= Number(p.value)
        
        if (passo <= 0) {
            window.alert('ERRO: valor inválido! passo mínimo será 1(um)')
            passo = 1
        }
        if (inicio < final) { // contagem crescente
            var x= inicio
            d.innerHTML= `Resultado: ${x}`
            while (x <= final) {
                x+= passo  // x= x + passo
                if (x <= final) {d.innerHTML += ` / ${x}`}
            } 
        } else if (inicio > final) { // contagem regressiva 
                    var x= inicio
                    d.innerHTML= `Resultado: ${x}`
                    while (x >= final) {
                        x-= passo // x= x - passo
                        if (x >= final) {d.innerHTML += ` / ${x}`}
                    }
                }
    }
}
