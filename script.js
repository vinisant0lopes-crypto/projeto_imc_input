// index 2 = peso
// index 3 = altura
// index 4 = imc

import { calculo, imc } from "./imc.js";

var trs = document.querySelectorAll('tbody tr')
var table = document.querySelector('table')
let input = document.querySelector('.entrada')

//laço
// extrai a table e aplica a propriedade .rows.lenght para obter o numero total de linhas
for (let index = 0; index < 20 ; index++) {
    //obtem as trs e extrai seus filhos (tds)
    let tr = trs[index]
    let filhos = tr.children
    
    //Extrair informações das celulas
    let peso = filhos[2].textContent
    let altura = filhos[3].textContent
    
    //Definir como numero decimal
    peso = parseFloat(peso)
    altura = parseFloat(altura)

    //Realizar as funções
    const imcConta = calculo(peso, altura)
    const imcTipo = imc(imcConta)

    //Inserir o resultado
    filhos[4].textContent = imcConta
    filhos[5].textContent = imcTipo
    

}

trs.forEach(tr => {
    let filhos = tr.children
    
    let status = filhos[5]
    var pai =  status.parentNode
       
    if(status.textContent == 'Abaixo do Peso'){
        pai.style.backgroundColor = '#eec6c6'
    } else if(status.textContent == 'Peso Normal'){
       pai.style.backgroundColor = 'white'
    } else if(status.textContent == 'Sobrepeso'){ 
        pai.style.backgroundColor = '#edf4d8'
    }else if(status.textContent == 'Obesidade Grau I'){
        pai.style.backgroundColor = '#cb9c9c'
    }else if(status.textContent == 'Obesidade Grau II'){
        pai.style.backgroundColor = '#6f3939'
    }else if(status.textContent == 'Obesidade Grau III'){
        pai.style.backgroundColor = '#350a0a'
    }
})

// filtro na tabela
input.addEventListener('input', ()=>{

    let valor = input.value.toLowerCase() 

    trs.forEach(tr => {
        tr.visible = true
        let tds = tr.children
        
        let textoCelula = tds[5].textContent.toLowerCase()
        if(!textoCelula.includes(valor)){
            tr.visible = false      
        }
        
        if(tr.visible){
            tr.style.display = 'table-row'
        } else {
            tr.style.display = 'none'
        }
        
    })

})







