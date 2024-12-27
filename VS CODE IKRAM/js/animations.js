// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Initial animation for hero section
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero .content');
    if (hero) {
        hero.classList.add('animate-fadeIn');
    }
    
    // Add hover effects to menu cards
    const menuCards = document.querySelectorAll('.menu-card');
    menuCards.forEach(card => {
        card.classList.add('hover-grow');
    });
    
    // Add reveal classes to sections
    const aboutSection = document.querySelector('.about .row');
    if (aboutSection) {
        aboutSection.classList.add('reveal', 'fade-left');
    }
    
    const menuItems = document.querySelectorAll('.menu .menu-card');
    menuItems.forEach((item, index) => {
        item.classList.add('reveal', 'fade-bottom');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const contactForm = document.querySelector('.contact .row');
    if (contactForm) {
        contactForm.classList.add('reveal', 'fade-right');
    }
});

// Listen for scroll events
window.addEventListener('scroll', reveal);

// Trigger initial reveal
reveal();
