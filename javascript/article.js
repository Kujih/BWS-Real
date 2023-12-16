const itemContainer = document.getElementById('item-container');

fetch('../json/article.json')
  .then(response => response.json())
  .then(data => {

    const path = window.location.pathname;
    let index = 0;

    // Determine data index based on path
    switch (true) {
    case path.includes('article'):
        index = 0;
        break;
    case path.includes('article2'):
        index = 1;
        break;
    case path.includes('article3'):
        index = 2;
        break;
    case path.includes('article4'):
        index = 3;
        break;
    case path.includes('article5'):
        index = 4;
        break;
    case path.includes('article6'):
        index=5;
        break;
        
      default:
        index = 0; // Fallback to first item
    }

    const item = data[index];
    
    // Set product name and price
    const namaarticleElement = document.querySelector('#item-container h1.namaarticle');
    namaarticleElement.textContent = item.namaarticle;

    // Set paragraphs
    const detailParagraphs = document.querySelectorAll('#item-container .detailarticle p');
    for (let i = 0; i < detailParagraphs.length; i++) {
      detailParagraphs[i].textContent = item[`paragaph${i + 1}`]; // Add 1 to account for the index starting from 1
    }
    
  })

  .catch(error => {
    console.error('Error fetching data: False', error);
  });

//   Format number to rupiah currency
  function formatRupiahNoDecimal(hargaNumber) {
    const formatter = new
   
  Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    });
    return formatter.format(hargaNumber);
  }