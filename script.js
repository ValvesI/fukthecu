//alert('what"s up');
let nomeUsuario = prompt("");
let anterior = document.querySelector('#texto');

anterior.textContent = nomeUsuario;

while(nomeUsuario == ""){
    nomeUsuario = prompt('Da onde você vem?')
};

if(nomeUsuario == null){
    anterior.textContent = 'PEQUENOS';
} else{
    anterior.textContent = nomeUsuario;
}