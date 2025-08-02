// Dynamic Counter
let counter = document.getElementById("counter");
let count = 64;

const interval = setInterval(() => {
  if (count < 100) {
    count++;
    counter.textContent = count;
  } else {
    clearInterval(interval);
  }
}, 60); // Counter updates every 60ms

// Page transition
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.opacity = "0";

    setTimeout(() => {
      loadingScreen.style.display = "none";
      const mainContent = document.getElementById("main-content");
      mainContent.style.display = "block";

      setTimeout(() => {
        mainContent.style.opacity = "1";
        document.body.style.overflow = "auto";
      }, 100);
    }, 1000); // Matches CSS transition
  }, 3000); // Keep loader visible for 3 seconds
});




const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function goToSlide(index) {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
}

function startCarousel() {
    setInterval(() => 
    {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }, 3000); // 3 seconds pause
}

window.onload = () => {
    goToSlide(0);
    startCarousel();
};