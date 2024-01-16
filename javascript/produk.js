const produkDescription = [
  "This steak can have seasonal taste",
  "This steak from the best cut of the beef so you should try it",
  "This is a product Description 3",
  "This is a product Description 4",
];

const menuCards = document.querySelectorAll('.menu-card');
const popupMenu = document.querySelector('.popup-menu');
const popupCloseBtn = document.querySelector('.popup-close');
const popupMenuOverlay = document.querySelector('.popup-menu-overlay');
const menuDescription = document.querySelector('#menu-description');

function openPopup(card) {
  const menuName = card.querySelector('#menu-name').textContent;
  const menuPrice = card.querySelector('#menu-price').textContent;
  const menuImage = card.querySelector('#menu-image').src;
  const productIndex = Array.from(menuCards).indexOf(card);
  const productDescription = produkDescription[productIndex];

  popupMenu.querySelector('#popup-menu-name').textContent = menuName;
  popupMenu.querySelector('#popup-menu-price').textContent = menuPrice;
  popupMenu.querySelector('#popup-menu-image').src = menuImage;
  menuDescription.textContent = productDescription; 

  popupMenu.classList.add('open');
}

// Function to close the popup
const closePopup = () => {
  popupMenu.classList.remove('open');
};
// Add click events to menu cards and close button
menuCards.forEach(card => card.addEventListener('click', () =>
  openPopup(card)));

popupCloseBtn.addEventListener('click', closePopup);


// Optional: Close the popup when clicking outside of it
popupMenuOverlay.addEventListener('click', (event) => {
  if (event.target !== popupMenuOverlay) {
    closePopup();
  }
});

