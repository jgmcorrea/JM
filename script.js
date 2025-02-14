// Função para rolar até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
}