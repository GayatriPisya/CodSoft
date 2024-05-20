document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault();
    var aboutSection = document.getElementById('about');
    var offset = aboutSection.getBoundingClientRect().top + window.scrollY - 80; 
    window.scrollTo({ top: offset, behavior: 'smooth' });
});

document.getElementById('gallery-link').addEventListener('click', function(e) {
    e.preventDefault();
    var gallerySection = document.getElementById('gallery');
    var offset = gallerySection.getBoundingClientRect().top + window.scrollY - 80; 
    window.scrollTo({ top: offset, behavior: 'smooth' });
});

document.getElementById('featured-link').addEventListener('click', function(e) {
    e.preventDefault();
    var featuredSection = document.getElementById('featured-workshop');
    var offset = featuredSection.getBoundingClientRect().top + window.scrollY - 80; 
    window.scrollTo({ top: offset, behavior: 'smooth' });
});

document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault();
    var contactSection = document.getElementById('contact');
    var offset = contactSection.getBoundingClientRect().top + window.scrollY - 80; 
    window.scrollTo({ top: offset, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const registerBtn = document.getElementById('register-btn');
    const modal = document.getElementById('registration-form');
    const closeBtn = document.getElementsByClassName('close-btn')[0];

    registerBtn.onclick = function() {
        modal.style.display = 'block';
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    const form = document.getElementById('reg-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for Registration');
        modal.style.display = 'none';
    });
});
