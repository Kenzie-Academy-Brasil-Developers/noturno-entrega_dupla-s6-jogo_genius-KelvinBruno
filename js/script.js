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
 let contaFases = 0;
 let cores = ['verde', 'vermelho', 'amarelo', 'azul']

 let botaoVerde = document.getElementById('verde'); // declaração antes para o navegador entender que é um objeto html mas aqui ele ainda não pega e só ira pegar na função pegaBotao
 let botaoVermelho = document.getElementById('vermelho');
 let botaoAmarelo = document.getElementById('amarelo');
 let botaoAzul = document.getElementById('azul');
 let botaoJogar = document.getElementById('botaoJogar');



function sorteiaCor(){
    let posicao = (Math.floor(Math.random() * 4));
    let corAtual = cores[posicao];
    arrayJogo.push(corAtual);
    console.log(corAtual);
}

function jogadaPC(){ // botaoJogar começa essa função e depois ela é continuada mediante acertos
 sorteiaCor();
 for(i=0;i<arrayJogo.length;i++){    
    animacao(arrayJogo[i])   
}   
}


function testaJogada(){
    // acionada no click da div, da push na cor do jogador e testa para ver se ele já finalizou sua tentativa
    let corJogada = event.target.id;// pega o id da jogada
    animacao(corJogada)

   arrayJogador.push(`${corJogada}`)

    if(arrayJogador.length === arrayJogo.length){
        testaJogo();
    }
}

function testaJogo(){
    let contador =0;
    for(i=0;i<arrayJogo.length;i++){
        if(arrayJogador[i] == arrayJogo[i]){
         contador ++;
           
        }
    }if(contador === arrayJogo.length){
        jogadaPC();
        contaFases++;
        arrayJogador = []
    }
    else{
        window.alert('não')
    }
}


function animacao(cor) {
  // pega a cor e faz a animação conforme
  if (cor === "azul") {
    botaoAzul.classList.add("animacao") ;
    
    setTimeout( () => ( botaoAzul.classList.remove('animacao') ), 2000 )
  }

  if (cor == "amarelo") {
    botaoAmarelo.classList.add("animacao")
    
    setTimeout( () => ( botaoAmarelo.classList.remove('animacao') ), 2000 )
  }

   if (cor == "verde") {
    botaoVerde.classList.add("animacao")
    
    setTimeout( () => ( botaoVerde.classList.remove('animacao') ), 2000 )
   }

   if (cor == "vermelho") {
    botaoVermelho.classList.add("animacao")
    
    setTimeout( () => ( botaoVermelho.classList.remove('animacao') ), 2000 )
   }
}

