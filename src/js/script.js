// Declarando um array de imagens
let imagens =[
    'src/assets/imagem1.jpg',
    'src/assets/imagem2.jpg',
    'src/assets/imagem3.jpg',
]

// Declarando as variaveis

let i=0;
let tempo=5000;

// Criando a função do slideshow

function slideshow(){
    document.getElementById('image').src= imagens[i];
    i++;
    if(i == imagens.length){
        i=0;
    }
    setTimeout("slideshow()",tempo)
}
slideshow();