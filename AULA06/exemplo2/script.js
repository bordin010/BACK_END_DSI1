// =====================================
// SELECIONANDO ELEMENTOS DO DOM
// =====================================

// Selecionando por ID
// console.log(document.getElementById("titulo"));
// Para visualização na console.
 
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imageteste");

// Selecionando por classe
let caixas = document.getElementsByClassName("box");

// Mostrar no console.log
console.log(titulo);
console.log(caixas);
console.log(imagem);

// =====================================
// FUNÇÃO PARA ALTERAR O CONTEÚDO
// =====================================

function alterar(){
    titulo.innerText = "O homem que amou o Brasil! 💚"
    subtitulo.innerText = "O GOAT"
    paragrafo.innerText = "O Melhor presidente que o Brasil já teve."

    // Alterando elemento da classe
    caixas[0].innerText = "Primeiro parágrafo alterado"
    caixas[1].innerText = "Segundo parágrafo alterado"

    // Alterando imagem
    imagem.src = "https://s2-g1.glbimg.com/v852h9EH9JTPOAp4PJGxY1mJscs=/0x0:427x640/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/F/7/qkFYZGRuuqBkBNsSng3w/3.jpg"
}