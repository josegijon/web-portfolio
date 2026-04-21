document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos las secciones basándonos en los IDs que tienes en el nav
    const sections = document.querySelectorAll('section[id]');
    // Seleccionamos los enlaces tanto de desktop como de mobile si quieres
    const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile-list a');

    const observerOptions = {
        root: null,
        // Este margen indica que la sección se activa cuando ocupa el 40% superior
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    // Quitamos la clase a todos
                    link.classList.remove('active');
                    // Se la ponemos solo al que coincide con el ID
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});


const btn = document.getElementById('nav-hamburger');
const menu = document.getElementById('nav-mobile');

function toggleMenu() {
    const isOpen = btn.classList.toggle('open');

    menu.classList.toggle('open');

    btn.setAttribute('aria-expanded', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);

    document.body.style.overflow = isOpen ? 'hidden' : '';
};

function closeMenu() {
    if (btn.classList.contains('open')) {
        toggleMenu();
    }
};

btn.addEventListener('click', toggleMenu);

document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', toggleMenu);
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeMenu();
    }
});