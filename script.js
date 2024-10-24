// Smooth Scrolling for Navbar Links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Offset for the sticky navbar
            behavior: 'smooth'
        });
    });
});

// Interactive Portfolio Cards - Flip Effect on Hover
const portfolioCards = document.querySelectorAll('.portfolio-card');
portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
    });
});

// Toggle mobile menu visibility (optional for small screens)
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Show "back to top" button after scrolling
const backToTopBtn = document.createElement('button');
backToTopBtn.className = 'back-to-top';
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
