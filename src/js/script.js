/*
criar botões do jogo e botão jogar com DOM
adicionar handlers de click nos botões


Sorteia número de 0 a 3 e da push em um array.
esse array é usado para mostrar os botões brilhando conforme for sendo preenchido

Jogador clica nos botões para encher um novo array
Se arrayJogador for igual arrayJogo, o jogo continua
irá precisar de um if e um for para comparar um array com o outro
while para verificar erro no meio do jogo
se array for diferente, mensagem avisando que perdeu e pede para clicar em jogar novamente

if para se pontuação máxima for pon

*/ 
// window.alert('Espere as cores piscarem e')// PRIMEIRA LINHA DO SCRIPT PARA APARECER PRIMEIRO, explicação do jogo

 //sorteia número de 0 a 3

 let arrayJogador = [];
 let arrayJogo = [];
 let contaFases = 1;
 let highscore = 0;
 let cores = ['verde', 'vermelho', 'amarelo', 'azul']

function sorteiaCor(){
    let posicao = (Math.floor(Math.random() * 4));
    let corAtual = cores[posicao];

    arrayJogo.push(corAtual);
  
}

function jogadaPC(){ // botaoJogar começa essa função e depois ela é continuada mediante acertos ou
  sorteiaCor();
  let count = 0;
  textoCentral.innerText = 'Observe a jogada'
  arrayJogo.forEach((cor, i) => {
    setTimeout(() => {
    console.log(arrayJogo)
    animacao(arrayJogo[i]);
    count ++;
    setTimeout( () => ( botaoAzul.classList.remove('animacao') ), 1000 )
    if(count === arrayJogo.length){
      setTimeout( () => ( textoCentral.innerText = 'Jogue agora' ), 1000 )
      
    }
    }, i * 1500);
  });

 
}


function testaJogada(){
    
    let corJogada = event.target.id;// pega o id da jogada
    animacaoJogada(corJogada)

   arrayJogador.push(`${corJogada}`)
  if(arrayJogador.length === arrayJogo.length){  
    textoCentral.innerText = 'Aguarde'
  setTimeout(function(){
    testaJogo();
    },3000);
}

    
}

function testaJogo(){
    let contador =0;
    for(i=0;i<arrayJogo.length;i++){
        if(arrayJogador[i] == arrayJogo[i]){
         contador ++; // único modo que funcionou pois mesmo sendo declarado como string ele não entendia que era igual
           
        }
    }
    if(contador === arrayJogo.length){
        jogadaPC();
        atualizaNivel();
        arrayJogador = []

    }
    else{
        perdeuOJogo();
    }
}

function atualizaNivel(){
  contaFases++;
  document.querySelector('#nivel').innerHTML= `Nivel: ${contaFases}` 
  if(contaFases>highscore){
    highscore = contaFases
    document.querySelector('#highScore').innerHTML = `High score: ${highscore}`; 
  }
}

function perdeuOJogo(){
  arrayJogo = [];
  arrayJogador = [];
  textoCentral.innerText = "Ah você perdeu :( \n\n Clique em jogar novamente para reiniciar";
  contaFases= 1;
  document.querySelector('#nivel').innerHTML= `Nivel: ${contaFases}` 
  botaoJogar.innerText = 'Jogar Novamente';
  botaoJogar.classList.add('perdeu')
}

function animacao(cor) {
    if (cor === "azul") {
        botaoAzul.classList.add("animacao") ;
        
        setTimeout( () => ( botaoAzul.classList.remove('animacao') ), 1000 )
      }
    
      if (cor == "amarelo") {
        botaoAmarelo.classList.add("animacao")
        
        setTimeout( () => ( botaoAmarelo.classList.remove('animacao') ), 1000 )
      }
    
       if (cor == "verde") {
        botaoVerde.classList.add("animacao")
        
        setTimeout( () => ( botaoVerde.classList.remove('animacao') ), 1000 )
       }
    
       if (cor == "vermelho") {
        botaoVermelho.classList.add("animacao")
        
        setTimeout( () => ( botaoVermelho.classList.remove('animacao') ), 1000 )
       }

}

function animacaoJogada(cor) {

  if (cor === "azul") {
      botaoAzul.classList.add("animacao");
      setTimeout( () => ( botaoAzul.classList.remove('animacao') ), 1000 );
    }
  
    if (cor == "amarelo") {
      botaoAmarelo.classList.add("animacao");
      setTimeout( () => ( botaoAmarelo.classList.remove('animacao') ), 1000 );
    }
  
     if (cor == "verde") {
      botaoVerde.classList.add("animacao");
      setTimeout( () => ( botaoVerde.classList.remove('animacao') ), 1000 );
     }
  
     if (cor == "vermelho") {
      botaoVermelho.classList.add("animacao");
      setTimeout( () => ( botaoVermelho.classList.remove('animacao') ), 1000 );
     }
 
  }

