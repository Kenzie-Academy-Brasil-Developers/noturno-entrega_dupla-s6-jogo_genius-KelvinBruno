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

    redBox.id = 'red'
    greenBox.id = 'green'
    blueBox.id = 'blue'
    yellowBox.id = 'yellow'
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
    playButton.innerText = 'Jogar'
    container.appendChild(playButton)
}

function asideBoxs () {
    const asideNivelDiv = document.createElement('div')
    asideNivelDiv.id = 'asideNivel'
    container.appendChild(asideNivelDiv)

    const nivelSpan = document.createElement('span')
    nivelSpan.id = 'nivel'
    nivelSpan.innerText = 'Nivel: ${value}'

    const highScoreSpan = document.createElement('span')
    highScoreSpan.id = 'HighScore'
    highScoreSpan.innerText = 'High score: ${value}'

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

criarLayout()