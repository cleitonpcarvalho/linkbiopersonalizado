// Função que anima os elementos ao carregar a página
window.onload = function() {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.remove('hidden');
            element.style.opacity = 1; // Torna visível
            element.style.transform = 'translateY(0)'; // Move para a posição original
        }, index * 300); // Delay para cada elemento
    });
};
