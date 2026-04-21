document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const btn = document.getElementById('submit-btn');
    const success = document.getElementById('form-success');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        e.stopPropagation();

        btn.disabled = true;
        btn.querySelector('.btn-submit-text').textContent = 'Enviando...';

        try {
            const res = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
                form.reset();
                success.classList.add('visible');
                btn.querySelector('.btn-submit-text').textContent = 'Enviado ✓';
            } else {
                btn.disabled = false;
                btn.querySelector('.btn-submit-text').textContent = 'Error, intenta de nuevo';
            }
        } catch {
            btn.disabled = false;
            btn.querySelector('.btn-submit-text').textContent = 'Error, intenta de nuevo';
        }
    });
});