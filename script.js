alert('what"s up lil nigga');
let nomeUsuario = prompt("");
let anterior = document.querySelector('#texto');

anterior.textContent = nomeUsuario;

while(nomeUsuario == ""){
    nomeUsuario = prompt('Da onde você vem?')
};

if(nomeUsuario == null){
    anterior.textContent = 'usuário de droga';
} else{
    anterior.textContent = nomeUsuario;
}