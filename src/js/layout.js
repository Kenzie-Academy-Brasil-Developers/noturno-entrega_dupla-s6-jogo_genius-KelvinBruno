function criarLayout () {
    const container = document.getElementById('container')
    criarCoresEBotao()
    asideBoxs()
}


function criarCoresEBotao () {
    const gameContainer = document.createElement('div')
    gameContainer.id = 'gameContainer'

    container.appendChild(gameContainer)

    const redBox = document.createElement('div')
    const greenBox = document.createElement('div')
    const blueBox = document.createElement('div')
    const yellowBox = document.createElement('div')
    const centerBox = document.createElement('div')
    const centerText = document.createElement('span')

    centerText.innerText = 'Clique em jogar'
    centerText.id = 'textoCentral'
    redBox.id = 'vermelho'
    greenBox.id = 'verde'
    blueBox.id = 'azul'
    yellowBox.id = 'amarelo'
    centerBox.id = 'center'

    redBox.classList.add('block')
    greenBox.classList.add('block')
    blueBox.classList.add('block')
    yellowBox.classList.add('block')

    gameContainer.appendChild(redBox)
    gameContainer.appendChild(greenBox)
    gameContainer.appendChild(blueBox)
    gameContainer.appendChild(yellowBox)
    gameContainer.appendChild(centerBox)

    centerBox.appendChild(centerText)

    const playButton = document.createElement('button')
    playButton.id = 'botaoJogar'
    playButton.innerText = 'Jogar'
    container.appendChild(playButton)
}

function asideBoxs () {
    const asideNivelDiv = document.createElement('div')
    asideNivelDiv.id = 'asideNivel'
    container.appendChild(asideNivelDiv)

    const nivelSpan = document.createElement('span')
    nivelSpan.id = 'nivel'
    nivelSpan.innerText = `Nivel: ${contaFases}` 

    const highScoreSpan = document.createElement('span')
    highScoreSpan.id = 'highScore'
    highScoreSpan.innerText = `High score: ${highscore}`; 

    asideNivelDiv.appendChild(nivelSpan)
    asideNivelDiv.appendChild(highScoreSpan)

    const asideExplicacaoDiv = document.createElement('div')
    asideExplicacaoDiv.id = 'asideExplicacao'
    container.appendChild(asideExplicacaoDiv)

    const explicacaoParagraph = document.createElement('p')
    explicacaoParagraph.innerText = 'Você deve apertar as cores na sequência mostrada, a cada nível aumenta uma cor na sequência.'

    const createdBySpan = document.createElement('span')
    createdBySpan.innerText = 'Created by: Kelvin Lopes && Renato Suzuki'

    asideExplicacaoDiv.appendChild(explicacaoParagraph)
    asideExplicacaoDiv.appendChild(createdBySpan)
}

let botaoVerde = document.getElementById('verde'); // declaração antes para o navegador entender que é um objeto html mas aqui ele ainda não pega e só ira pegar na função pegaBotao
let botaoVermelho = document.getElementById('vermelho');
let botaoAmarelo = document.getElementById('amarelo');
let botaoAzul = document.getElementById('azul');
let botaoJogar = document.getElementById('botaoJogar');
let textoCentral = document.getElementById('textoCentral')

function pegaBotao(){
    botaoVerde = document.getElementById('verde');
    botaoVerde.addEventListener('click',testaJogada)

    botaoVermelho = document.getElementById('vermelho');
    botaoVermelho.addEventListener('click',testaJogada)

    botaoAmarelo = document.getElementById('amarelo');
    botaoAmarelo.addEventListener('click',testaJogada)

    botaoAzul = document.getElementById('azul');
    botaoAzul.addEventListener('click',testaJogada)
    
    botaoJogar = document.getElementById('botaoJogar');
    botaoJogar.addEventListener('click',jogadaPC)

    textoCentral = document.getElementById('textoCentral')
    
    }

    window.onload = function(){
        criarLayout()
        pegaBotao();
    }
  
  
    