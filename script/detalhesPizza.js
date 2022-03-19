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
    var qtdeNumericoP = 0

    var aumentarPizza = document.querySelector(".acalp")
    var diminuirPizza = document.querySelector(".dcalp")
    var precoDaQuantidadeP = document.querySelector("#precoDaQuantidadeP")
    var totalP= 0
    var contP= 0


    // MARGUERITA
    var qtdeNumMarg = document.querySelector(".marg")
    var qtdeNumericoM = 0

    var aumentarMarg = document.querySelector(".amarg")
    var diminuirMarg = document.querySelector(".dmarg")
    var precoDaQuantidadeM = document.querySelector("#precoDaQuantidadeM")
    var totalM = 0
    var contM = 0


    // FRANGO COM CATURIRY
    var qtdeNumFrac = document.querySelector(".frac")
    var qtdeNumericoF = 0

    var aumentarFrac = document.querySelector(".afrac")
    var diminuirFrac = document.querySelector(".dfrac")
    var precoDaQuantidadeF = document.querySelector("#precoDaQuantidadeF")
    var totalF = 0
    var contF = 0
        

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
    qtdeNumericoP +=1
    qtdeNumCalp.innerHTML = `${qtdeNumericoP}`
    totalP= qtdeNumericoP*35

    precoDaQuantidadeP.innerHTML =`R$ ${totalP},00`
    precoDaQuantidadeP.style.color = "#362222"

    contP= qtdeNumericoP*35

    subtotalValor.innerHTML = `R$ ${totalP + totalM + totalF + totalC},00`
    totalValor.innerHTML = `R$ ${contP + contM  + contF + contC + 10},00`
})

    diminuirPizza.addEventListener("click", function(){
    if(qtdeNumericoP <= 0){
        qtdeNumericoP = 0
        precoDaQuantidadeP.style.color = "#D44000"

    } else {
        qtdeNumericoP -=1
    
        qtdeNumCalp.innerHTML = `${qtdeNumericoP}`
        totalP= qtdeNumericoP*35

        precoDaQuantidadeP.innerHTML =`R$ ${totalP},00`

        contP= qtdeNumericoP*35

        subtotalValor.innerHTML = `R$ ${totalP + totalM + totalF + totalC},00`
        totalValor.innerHTML = `R$ ${contP + contM  + contF + contC + 10},00`
        
        
        if (qtdeNumericoP == 0 && qtdeNumericoM == 0 && qtdeNumericoF == 0 && qtdeNumericoC == 0){
            totalValor.innerHTML = `R$ 0,00`
        }
    }
})



// MARGUERITA

    aumentarMarg.addEventListener("click", function(){
    qtdeNumericoM +=1
    qtdeNumMarg.innerHTML = `${qtdeNumericoM}`
    totalM = qtdeNumericoM*35

    precoDaQuantidadeM.innerHTML =`R$ ${totalM},00`
    precoDaQuantidadeM.style.color = "#362222"

    contM = qtdeNumericoM*35

    subtotalValor.innerHTML = `R$ ${totalP + totalM + totalF + totalC},00`
    totalValor.innerHTML = `R$ ${contP + contM  + contF + contC + 10},00`
})

    diminuirMarg.addEventListener("click", function(){
    if(qtdeNumericoM <= 0){
        qtdeNumericoM = 0
    } else {
        qtdeNumericoM -=1
    
        qtdeNumMarg.innerHTML = `${qtdeNumericoM}`
        totalM = qtdeNumericoM*35

        precoDaQuantidadeM.innerHTML =`R$ ${totalM},00`

        contM = qtdeNumericoM*35

        subtotalValor.innerHTML = `R$ ${totalP + totalM + totalF + totalC},00`
        totalValor.innerHTML = `R$ ${contP + contM  + contF + contC + 10},00`
        
        
        if (qtdeNumericoP == 0 && qtdeNumericoM == 0 && qtdeNumericoF == 0 && qtdeNumericoC == 0){
            totalValor.innerHTML = `R$ 0,00`
        }
    }
})


// FRANGO COM CATUPIRY

    aumentarFrac.addEventListener("click", function(){
    qtdeNumericoF +=1
    qtdeNumFrac.innerHTML = `${qtdeNumericoF}`
    totalF = qtdeNumericoF*30

    precoDaQuantidadeF.innerHTML =`R$ ${totalF},00`
    precoDaQuantidadeF.style.color = "#362222"

    contF = qtdeNumericoF*30

    subtotalValor.innerHTML = `R$ ${totalP + totalM + totalF + totalC},00`
    totalValor.innerHTML = `R$ ${contP + contM  + contF + contC + 10},00`
})

    diminuirFrac.addEventListener("click", function(){
    if(qtdeNumericoF <= 0){
        qtdeNumericoF = 0
    } else {
        qtdeNumericoF -=1
    
        qtdeNumFrac.innerHTML = `${qtdeNumericoF}`
        totalF = qtdeNumericoF*30

        precoDaQuantidadeF.innerHTML =`R$ ${totalF},00`

        contF = qtdeNumericoF*30

        subtotalValor.innerHTML = `R$ ${totalP + totalM + totalF + totalC},00`
        totalValor.innerHTML = `R$ ${contP + contM  + contF + contC + 10},00`
        
        
        if (qtdeNumericoP == 0 && qtdeNumericoM == 0 && qtdeNumericoF == 0 && qtdeNumericoC == 0){
            totalValor.innerHTML = `R$ 0,00`
        }
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

    subtotalValor.innerHTML = `R$ ${totalP + totalM + totalF + totalC},00`
    totalValor.innerHTML = `R$ ${contP + contM  + contF + contC + 10},00`
})

    diminuirCoca.addEventListener("click", function(){
    if(qtdeNumericoC <= 0){
        qtdeNumericoC = 0
    } else {
        qtdeNumericoC -=1
    
        qtdeNumCoca.innerHTML = `${qtdeNumericoC}`
        totalC = qtdeNumericoC*3

        precoDaQuantidadeC.innerHTML =`R$ ${totalC},00`

        contC = qtdeNumericoC*3

        subtotalValor.innerHTML = `R$ ${totalP + totalM + totalF + totalC},00`

        totalValor.innerHTML = `R$ ${contP + contM  + contF + contC + 10},00`


        if (qtdeNumericoP == 0 && qtdeNumericoM == 0 && qtdeNumericoF == 0 && qtdeNumericoC == 0){
            totalValor.innerHTML = `R$ 0,00`
        }
    }
})


    


var pedirAgora = document.querySelector(".pedirAgora")

pedirAgora.addEventListener("click", function(){
    location.href = "final.html"
})