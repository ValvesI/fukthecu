alert('what"s up lil nigga');
let nomeUsuario = prompt("");
let anterior = document.querySelector('#texto');

anterior.textContent = nomeUsuario;

while(nomeUsuario == "" || nomeUsuario == null){
    nomeUsuario = prompt('Da onde você vem?')

};