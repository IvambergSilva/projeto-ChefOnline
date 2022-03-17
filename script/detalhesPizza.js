var voltar = document.querySelector(".voltar")


voltar.addEventListener("click", function(){
    window.history.go(-1)
})

var favoritar = document.querySelector(".starFavoritar")

favoritar.addEventListener("click", function (){
    favoritar.src = "imagens/StarD.png"
})

//// QUANTIDADE

var qtdeNumCalp = document.querySelector(".calp")
var qtdeNumFrac = document.querySelector(".frac")
var qtdeNumMarg = document.querySelector(".marg")
var qtdeNumCoca = document.querySelector(".coca")

var qtdeNumerico = 0

var aumentar = document.querySelector(".aumentar")
var diminuir = document.querySelector(".diminuir")


aumentar.addEventListener("click", function(){
    qtdeNumerico +=1
    qtdeNumCalp.innerHTML = `${qtdeNumerico}`
})

diminuir.addEventListener("click", function(){
    if(qtdeNumerico <= 0){
        qtdeNumerico = 0
    } else {
        qtdeNumerico -=1
    }
    qtdeNumCalp.innerHTML = `${qtdeNumerico}`
})


