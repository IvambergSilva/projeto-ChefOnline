aumentar.addEventListener("click", function(){
    qtdeNumerico +=1
    qtdeNumCalp.innerHTML = `${qtdeNumerico}`
    total = `${qtdeNumerico*35}`

    precoDaQuantidade.innerHTML =`R$ ${total},00`
    precoDaQuantidade.style.color = "#362222"

    cont = qtdeNumerico*35 + 10

    subtotalValor.innerHTML = `R$ ${total},00`
    totalValor.innerHTML = `R$ ${cont},00`
})

diminuir.addEventListener("click", function(){
    if(qtdeNumerico <= 0){
        qtdeNumerico = 0
        precoDaQuantidade.style.color = "#D44000"

    } else {
        qtdeNumerico -=1
    
    qtdeNumCalp.innerHTML = `${qtdeNumerico}`
    total = `${qtdeNumerico*35}`

    precoDaQuantidade.innerHTML =`R$ ${total},00`

    cont = qtdeNumerico*35-10

    subtotalValor.innerHTML = `R$ ${total},00`
    totalValor.innerHTML = `R$ ${cont + 10},00`
    }
})

