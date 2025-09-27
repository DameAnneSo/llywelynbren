let slideIndex = 1;
let autoSlideTimer;

// Initialize carousel
document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
  startAutoSlide();
});

// Manual navigation functions
function plusSlides(n) {
  showSlides((slideIndex += n));
  resetAutoSlide();
}

function currentSlide(n) {
  showSlides((slideIndex = n));
  resetAutoSlide();
}

// Main slide display function
function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  let slidesWrapper = document.querySelector(".slides-wrapper");

  if (!slidesWrapper || slides.length === 0) return;

  // Handle slide index boundaries
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Calculate transform value for smooth sliding
  let translateX = -((slideIndex - 1) * (100 / slides.length));
  slidesWrapper.style.transform = `translateX(${translateX}%)`;

  // Update dots
  if (dots.length > 0) {
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (dots[slideIndex - 1]) {
      dots[slideIndex - 1].className += " active";
    }
  }
}

// Auto-advance functionality
function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
}

function startAutoSlide() {
  autoSlideTimer = setInterval(autoSlide, 4000); // Change every 4 seconds
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  startAutoSlide();
}

// Pause auto-slide on hover
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".slideshow-container");
  if (carousel) {
    carousel.addEventListener("mouseenter", function () {
      clearInterval(autoSlideTimer);
    });

    carousel.addEventListener("mouseleave", function () {
      startAutoSlide();
    });
  }
});
