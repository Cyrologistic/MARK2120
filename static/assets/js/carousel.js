const carousel = document.querySelector('.carousel');
const carouselTrack = document.querySelector('.carousel__track');
const carouselButtons = Array.from(carousel.querySelectorAll('.carousel__button'));

let carouselPosition = 0;

function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${carouselPosition * 100 / 3}%)`;
}

function reorderItems(direction) {
  if (direction === 'left') {
    const firstItem = carouselTrack.firstElementChild;
    carouselTrack.removeChild(firstItem);
    carouselTrack.appendChild(firstItem);
  } else {
    const lastItem = carouselTrack.lastElementChild;
    carouselTrack.removeChild(lastItem);
    carouselTrack.insertBefore(lastItem, carouselTrack.firstElementChild);
  }
}

carouselButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.classList.contains('carousel__button--left')) {
      reorderItems('right');
    } else {
      reorderItems('left');
    }
    updateCarousel();
  });
});