function Top() { // adiciona a funcão de voltar ao topo da pagina
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

var botaoTopo = document.querySelector('.botao-topo');

window.addEventListener('scroll', function() {
    // Verifica se a posição de rolagem é maior que a 1/4 da altura da janela
    if (window.scrollY > window.innerHeight / 4) {
        botaoTopo.style.opacity = 1;
    } else {
        botaoTopo.style.opacity = 0;
    }
});

// Obtém referências para o input e a imagem
var inputCheckbox = document.getElementById('topic__product');
var arrowImage = document.getElementById('arrowImage');

// Adiciona um ouvinte de eventos para detectar alterações no estado do input
inputCheckbox.addEventListener('change', function() {
    // Verifica se o input está marcado
    if (inputCheckbox.checked) {
        // Troca o src da imagem para a seta para cima
        arrowImage.src = './img/cabeçalho/icons8-seta-para-cima-30.png';
    } else {
        // Troca o src da imagem de volta para a seta para baixo
        arrowImage.src = './img/cabeçalho/icons8-seta-para-baixo-30.png';
    }
});