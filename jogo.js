let numeroSecreto = 8;
let numeroSecreto1 = "Oito";
let numeroSecreto2 = "oito";
let numeroSecreto3 = "OITO"
let chute = '';

while(chute == ''){
   chute = prompt('escolha um número de 0 ao 10');
}

if (numeroSecreto == chute || chute == numeroSecreto1 || chute == numeroSecreto2 || chute == numeroSecreto3) {
    alert('parabens lil nigg');
    console.log('parabens lil nigg');
}
    else {
        alert('errou lixo');
        console.log('errou lixo');
    }