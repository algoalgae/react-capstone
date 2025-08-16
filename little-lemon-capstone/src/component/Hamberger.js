import './../assets/css/layout.css';

function Ham() {
    // Toggle the menu (accessible)
    const nav = document.querySelector('.site-nav');
    const btn = document.querySelector('.nav-toggle');

    btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    });

    // Close with Escape
    document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
    }
    });
}

export default Ham