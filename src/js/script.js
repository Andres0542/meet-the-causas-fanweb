document.addEventListener('DOMContentLoaded', function() {
    scrollNav()
    //NavegacionPorDispositivo()
});

window.addEventListener('resize', function(){
    //NavegacionPorDispositivo()
});

function scrollNav() {
    const navLinks = document.querySelectorAll('.header_contenido a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute('href');
            const section = document.querySelector(sectionScroll);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function ADefinir() {
    alert("Ya pe, todavía no definimos donde va a estar el siguiente punto que vamos a capturar. Mejor ve a empujar el cacharro.");
}

function NavegacionPorDispositivo() {
    const header = document.querySelector('.header');
    if (window.matchMedia("(max-width: 768px)").matches) {
        console.log("Estás en un dispositivo móvil");
        header.classList.add('fixed');
    }
    else {
        header.classList.remove('fixed');
    }
}