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
    }
  
  function criaBotao(){
    let areaDoJogo = document.getElementById('areaDoJogo');
    areaDoJogo.innerHTML= '<div id="verde" class="botaoDoJogo"></div> <div id="vermelho" class="botaoDoJogo"> </div><div id="amarelo" class="botaoDoJogo"> </div><div id="azul" class="botaoDoJogo"></div><button id="botaoJogar">Jogar</button>'
  }
  
  window.onload = function(){
      criaBotao();
      pegaBotao();
  }