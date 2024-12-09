
const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0

// Quando clicar na seta de avançar, temos que esconder todas as imagens e mostar a próxima imagem.
setaAvancar.addEventListener('click', function () {
    //testa se o contato r de imagens é igual o total de imagens
    const totalDeImagens = imagensPainel.length -1;
    if(imagemAtual===totalDeImagens){
        return;
    }
    //A imagem atual começa em 0 porque a primeira imagem assim que foi clicado no avançar eu preciso acrescentar +1 ao contator de imagem, pra saber qual sera a próxima imagem.
imagemAtual++;

    //esconder todas as imagens, pegar todas as imagens usando o DOM e remover a classe mostrar
imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });

    //Mostrar a próxima imagem , pegar as as imagens , descobrir qual é a próxima e colocar a classe nela.

imagensPainel[imagemAtual].classList.add('mostrar')

})

