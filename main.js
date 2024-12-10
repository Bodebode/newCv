// Sticky Navigation
window.addEventListener('scroll', function() {
    const header = document.querySelector('.sticky-header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Smooth Scrolling. 
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Modal Functionality
const modalTriggers = document.querySelectorAll('[data-toggle="modal"]');
modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
        const modalId = this.getAttribute('data-target');
        const modal = document.querySelector(modalId);
        modal.classList.add('show');
    });
});

// Close Modal
const closeModals = document.querySelectorAll('.modal .close');
closeModals.forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.classList.remove('show');
    });
});