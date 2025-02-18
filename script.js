// Toggle Navbar on Mobile
function toggleNavbar() {
    const navbarLinks = document.querySelector('.navbar-links');
    navbarLinks.classList.toggle('show');
}

// Carousel Functionality
let currentSlide = 0;

const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const carouselContainer = document.querySelector('.carousel-container');

function showSlide(index) {
    // Slide animation effect
    carouselContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Automatically change every 5 seconds

// Initial Slide Display
showSlide(currentSlide);
