// Eventos
// 1 - Usuário
// Clique em um elemento, scroll, digitar em um campo de input

// 2 - Página
// Quando uma página carrega, quando os elementos são carregados

// DOM - Document Object Model (Modelo de Objetos do Documento)
// Interface que permite que o JavaScript interaja com o HTML e CSS e possa então manipulá-los

// Window vs Document
window.addEventListener("load", function() { // Página está 100%, pronta para ser usada
    console.log("Página pronta.");
    document.querySelector('body').classList.add('loading-finalized');
});

document.addEventListener("DOMContentLoaded", function() { // Conteúdo foi carregado, mas sem estilo e sem o JS
    console.log("Conteúdo da página carregado.");
});