const itemContainer = document.getElementById('item-container');

let filetext = "../json/article.json";

fetch(filetext)
  .then(response => response.json())
  .then(data => {
    const filename = window.location.href.split("/").pop().split(".")[0]; ;
    
    let index = 0;

    // Determine data index based on path
    switch (filename) {
      case "article":
        index = 0;
        console.log("Matched article2");
        break;
      case "article2":
        index = 1;
        break;
      case "article3":
        index = 2;
        break;
      case "article4":
        index = 3;
        break;
      default:
        index = 0; // Fallback to first item
    }
    const item = data[index];

   // Set article name
    const namaArticleElement = document.querySelector("#item-container h1.namaarticle");
    namaArticleElement.textContent = checkData(item, "namaArticle");

    // Set headline
    const headlineArticleElement = document.querySelector('#item-container p.headlinearticle');
    headlineArticleElement.textContent = checkData(item, "headline");

    // Set paragraphs
    const detailParagraphs = document.querySelectorAll("#item-container .detailarticle .detailP");
    for (let i = 0; i < detailParagraphs.length; i++) {
      detailParagraphs[i].textContent = checkData(item, `paragraph${i + 1}`);
  }

  })
  
  .catch(error => {
    console.error("Error fetching data:", error);
  });


//   Format number to rupiah currency
  

  function checkData(data, property) {
    if (data && typeof data[property] !== "undefined") {
      return data[property];
    }
    return null; // Replace with desired fallback value
  }
  