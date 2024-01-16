const produkDescription = [
  "Seared to a succulent caramelize, our classic ribeye is a symphony of texture and flavor. Juicy marbling dances with a smoky char, delivering a steakhouse experience in every bite. Indulge in pure beefy satisfaction, perfect for those seeking a timeless taste of tradition.",
  "Experience melt-in-your-mouth luxury with our filet mignon. This lean cut, kissed by fire, boasts an impossibly tender texture and delicate flavor. Savored plain or dressed with a light sauce, it's an elegant choice for celebrating special occasions or treating yourself to a refined dining experience.  ",
  "For the adventurous palate, our cowboy ribeye takes it up a notch. Seasoned with a fiery blend of spices, it explodes with bold, smoky heat. Charred to perfection, the juicy interior offers a welcome contrast, creating a dynamic dance of flavor on your tongue. Dare to conquer this flame-kissed masterpiece?",
  "Aromatic herbs and a zesty lemon crust awaken your taste buds in this elevated New York strip. The rich beef mingles with the vibrant freshness of the herbs, creating a complex and satisfying balance. Enjoy a lighter yet equally delicious steak experience, perfect for those seeking a touch of sophistication",
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

