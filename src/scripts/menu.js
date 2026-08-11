const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('expanded');
        hamburger.setAttribute('aria-expanded', 
            navLinks.classList.contains('expanded').toString()
        );
    });
}
