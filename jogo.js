//Escopo Global
var altura = 0
var largura = 0 
var vidas = 1 
var tempo = 10
var criaMosquitoTempo = 1500

var nivel = window.location.search //search, pega string dps do ?
nivel = nivel.replace('?', '') // Replace pega qualquer caracter e substitui, no caso está selecionadn "?" e substituindo por " "

if (nivel === 'NORMAL') {
    criaMosquitoTempo = 1500
}else if (nivel === 'DIFICIL') {
    criaMosquitoTempo = 1000
}else if (nivel === 'HARDCORE') {
    criaMosquitoTempo = 750
}
//Escopo de Bloco 
function ajustaTelaNavegador() {
    altura  = window.innerHeight
    largura  = window.innerWidth

    console.log(altura, largura)
}
ajustaTelaNavegador()

var cronometro = setInterval(function(){
   
    tempo -= 1

    if(tempo < 0 ) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'winner.html'
    }else {
        document.getElementById('cronometro').innerHTML = tempo //innerHtml = Siginifica todo valor contido entre as tags HTML
    }
},1000)

function posicaoRandom() {

    //Removendo o mosquito anterior (Se no caso exista)
    if(document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()
    
    //Remove o coração
    if( vidas > 3) {
        window.location.href = 'gameOver.html'
    }else {
        document.getElementById('vida' + vidas).src="image/coracao_vazio.png"
        
        vidas++
        
        }
    }   

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX // ? = Se for : = Se não 
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX,posicaoY)

    //Criando elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'image/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito) 
}

function tamanhoAleatorio() {
    var tamanhoRandom = Math.floor(Math.random() * 3)

    switch(tamanhoRandom) {
        case 0 : // : se for igual a 0
            return 'mosquitinho'
        case 1 :
            return 'mosquitoMedio'
        case 2 :
            return 'mosquitoGrande'
    }
}

function ladoAleatorio() {
    var ladoRandom = Math.floor(Math.random() * 2)

    switch(ladoRandom) {
        case 0 : 
            return 'ladoA'
        case 1 :
            return 'ladoB'

    }
}