$(document).ready(function(){
    $(".client-carousel").owlCarousel({
        loop: true,  // Faz o carrossel rodar em loop infinito
        margin: 70,  // Espaço entre os itens
        nav: true,  // Ativa botões de navegação
        dots: true, // Mostra os indicadores de página
        autoplay: false, // Desativa rolagem automática
        navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"], // Ícones dos botões
        responsive:{
            0:{ items:1, nav: true }, // 1 item visível em telas pequenas
            768:{ items:2, nav: true }, // 2 itens visíveis em tablets
            1024:{ items:3, nav: true } // 3 itens visíveis em telas maiores
        }
    });
});