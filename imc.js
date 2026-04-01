function calculo(altura, peso){
    var imc = peso / (altura * altura)
    return imc.toFixed(1)
}


function imc(imc){
    if (imc < 18.5) {
        return "Abaixo do peso"
    }else if (imc < 24.9) {
        return "Peso Normal"
    }else if (imc < 29.9) {
        return "Sobrepeso"
    }else if (imc < 34.9) {
        return "Obesidade Grau I"
    }else if (39.9) {
        return "Obesidade Grau II"
    }else {
        return "Obesidade Grau III"
    }
}

export {calculo, imc}