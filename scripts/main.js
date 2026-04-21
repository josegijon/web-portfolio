// ── Reveal on scroll ───────────────────────
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// ── Diagrama Forecash: highlight cíclico ───
const diagramBoxes = document.querySelectorAll('.diagram-box');
let boxIdx = 0;

if (diagramBoxes.length > 0) {
    diagramBoxes.forEach(b => b.classList.remove('highlight'));

    setInterval(() => {
        diagramBoxes.forEach(b => b.classList.remove('highlight'));
        diagramBoxes[boxIdx % diagramBoxes.length].classList.add('highlight');
        boxIdx++;
    }, 1200);
}