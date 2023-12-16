const menuCards = document.querySelectorAll('.menu-card');
const currentCard = document.getElementById('current-card');
const menuImage = document.getElementById('menu-image');
const menuName = document.getElementById('menu-name');
const menuPrice = document.getElementById('menu-price');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Define current slide index
let currentSlide = 0;

// Fetch data from JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Update menu cards with data
    for (let i = 0; i < menuCards.length; i++) {
      menuCards[i].style.backgroundImage = `url(${data[i].image})`;
      menuCards[i].dataset.name = data[i].name;
      menuCards[i].dataset.price = data[i].price;
    }

    // Update current slide
    updateCurrentSlide(data[currentSlide]);

    // Add event listeners for navigation buttons
    prevButton.addEventListener('click', () => prevSlide(data));
    nextButton.addEventListener('click', () => nextSlide(data));

    // Set automatic slide transition (optional)
    // ...
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function updateCurrentSlide(data) {
  menuImage.src = data.image;
  menuName.textContent = data.name;
  menuPrice.textContent = data.price;
}

function nextSlide(data) {
  currentSlide = (currentSlide + 1) % data.length;
  updateCurrentSlide(data[currentSlide]);
  menuCards[currentSlide].classList.add('active');
  setTimeout(() => menuCards[currentSlide - 1].classList.remove('active'), 500);
}

function prevSlide(data) {
  currentSlide = (currentSlide - 1 + data.length) % data.length;
  updateCurrentSlide(data[currentSlide]);
  menuCards[currentSlide].classList.add('active');
  setTimeout(() => menuCards[currentSlide + 1].classList.remove('active'), 500);
}
