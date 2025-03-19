// Select carousel elements
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0; // Track the current slide

// Function to update the carousel's position
function updateCarousel() {
    const offset = -currentIndex * 100; // Calculate the offset for the active slide
    carousel.style.transform = `translateX(${offset}%)`;
}

// Event listener for the "Previous" button
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length; // Loop back to the last slide if at the beginning
    updateCarousel();
});

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length; // Loop back to the first slide if at the end
    updateCarousel();
});