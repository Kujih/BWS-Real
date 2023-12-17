function updateCurrentSlide(data) {
  menuImage.src = data[currentSlide].image;
  menuName.textContent = data[currentSlide].name;
  menuPrice.textContent = data[currentSlide].price;
}

function nextSlide(data) {
  currentSlide = (currentSlide + 1) % data.length;
  updateCurrentSlide(data[currentSlide]);
  updateButtonState();
}

function prevSlide(data) {
  currentSlide = (currentSlide - 1 + data.length) % data.length;
  updateCurrentSlide(data[currentSlide]);
  updateButtonState();
}

function updateButtonState() {
  prevButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === data.length - 1;
}

function formatRupiahNoDecimal(hargaNumber) {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });
  return formatter.format(hargaNumber);
}
