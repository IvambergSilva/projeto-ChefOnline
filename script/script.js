    //Primeiro projeto em "media escala" de HTML5, CSS3 e JavaScript
    //Ivamberg Silva - 21 anos - iniciante em Web Developer
    //Projeto realizado em março de 2022 - No início da minha caminhada na programação


    // Visualizar a senha ou não

    var olhinho = document.getElementById('olhoAberto')
    var senha = document.getElementById('senha')

    olhinho.addEventListener('click', function(){
        if (senha.getAttribute('type') == 'password'){
            senha.type = 'text'
            olhinho.src="imagens/olhofechado.png"
        } else {   
            senha.type = 'password'
            olhinho.src="imagens/olhoaberto.png"
        }
    })
    

    // Campos de email e senha

    var validade = document.querySelector('#validade')
    var idemail = document.querySelector("#email")    
    var criar = document.querySelector("#criar")

        
    function criarConta(){ 
        
        var email = idemail.value
        var senhaValor = senha.value

        if (email == '' || senha == ''){
            validade.innerHTML = `Preencha todos os campos acima *`
        } else if(email == "a@a" && senhaValor == "123a"){
            location.href = "home.html"
        } else {
            console.log('errado')
        }
        
    }