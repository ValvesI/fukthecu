let numeroSecreto = Math.random()*10;
Math.floor(numeroSecreto);
console.log(numeroSecreto);
let chute = '';

while(chute == ''){
   chute = prompt('escolha um número de 0 ao 10');
}

if (numeroSecreto == chute){
    alert('parabens lil nigg');
    console.log('parabens lil nigg');
}
    else {
        alert('errou lixo');
        console.log('errou lixo');
    }