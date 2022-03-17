//// VOLTAR

var voltar = document.querySelector(".voltar")

voltar.addEventListener("click", function(){
    window.history.go(-1)
})


//// FAVORITAR

var favoritar = document.querySelector(".starFavoritar")

var i = 0

favoritar.onclick = function(){
    if(i == 0){
        favoritar.src = "imagens/StarD.png"
        i=1
    } else {
        favoritar.src = "imagens/favorito.png"
        i=0
    }
}


//// QUANTIDADE

    // PIZZA
    var qtdeNumCalp = document.querySelector(".calp")
    var qtdeNumerico = 0

    var aumentarPizza = document.querySelector(".aumentar")
    var diminuirPizza = document.querySelector(".diminuir")
    var precoDaQuantidade = document.querySelector(".precoDaQuantidade")
    var total = 0
    var cont = 0


    // COCA-COLA
    var qtdeNumCoca = document.querySelector(".coca")
    var qtdeNumericoC = 0

    var aumentarCoca = document.querySelector(".acoca")
    var diminuirCoca = document.querySelector(".dcoca")
    var precoDaQuantidadeC = document.querySelector("#precoDaQuantidadeC")
    var totalC = 0
    var contC = 0

    //Geral

    var subtotalValor = document.querySelector(".subtotalValor")
    var totalValor = document.querySelector(".totalValor")


// PIZZA

aumentarPizza.addEventListener("click", function(){
    qtdeNumerico +=1
    qtdeNumCalp.innerHTML = `${qtdeNumerico}`
    total = qtdeNumerico*35

    precoDaQuantidade.innerHTML =`R$ ${total},00`
    precoDaQuantidade.style.color = "#362222"

    cont = qtdeNumerico*35

    subtotalValor.innerHTML = `R$ ${totalC + total},00`
    totalValor.innerHTML = `R$ ${cont + contC + 10},00`
})

diminuirPizza.addEventListener("click", function(){
    if(qtdeNumerico <= 0){
        qtdeNumerico = 0
        precoDaQuantidade.style.color = "#D44000"

    } else {
        qtdeNumerico -=1
    
    qtdeNumCalp.innerHTML = `${qtdeNumerico}`
    total = qtdeNumerico*35

    precoDaQuantidade.innerHTML =`R$ ${total},00`

    cont = qtdeNumerico*35-10

    subtotalValor.innerHTML = `R$ ${totalC + total},00`
    totalValor.innerHTML = `R$ ${cont + contC + 10},00`
    }
})


// COCA-COLA

aumentarCoca.addEventListener("click", function(){
    qtdeNumericoC +=1
    qtdeNumCoca.innerHTML = `${qtdeNumericoC}`
    totalC = qtdeNumericoC*3

    precoDaQuantidadeC.innerHTML =`R$ ${totalC},00`
    precoDaQuantidadeC.style.color = "#362222"

    contC = qtdeNumericoC*3

    subtotalValor.innerHTML = `R$ ${totalC + total},00`
    totalValor.innerHTML = `R$ ${cont + contC + 10},00`
})

diminuirCoca.addEventListener("click", function(){
    if(qtdeNumericoC <= 0){
        qtdeNumericoC = 0
    } else {
        qtdeNumericoC -=1
    
    qtdeNumCoca.innerHTML = `${qtdeNumericoC}`
    totalC = qtdeNumericoC*3

    precoDaQuantidadeC.innerHTML =`R$ ${totalC},00`

    contC = qtdeNumericoC*3-10

    subtotalValor.innerHTML = `R$ ${totalC + total},00`
    totalValor.innerHTML = `R$ ${cont + contC + 10},00`
    }
})