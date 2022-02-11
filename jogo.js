
var altura = 0
var largura = 0

function ajusteDimensaoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    
    console.log(altura , largura)
}
ajusteDimensaoJogo()

function posicaoRomdomica(){
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random()* altura ) - 90

    console.log(posicaoX, posicaoY)
    
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //Criar o elemento html

    var mosquito = document.createElement('img')
    mosquito.src = ('imagens/mosquito.png')
    mosquito.className = 'mosquito'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'


    document.body.appendChild(mosquito)

}
