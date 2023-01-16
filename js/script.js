let selectSun = document.querySelector('.first-select');
let selectWateringcan = document.querySelector('.second-select');
let selectPets = document.querySelector('.third-select');
let valueSelectSun;
let valueSelectWateringcan;
let valueSelectPets;

init();

function searchValues() {
  fetch('../plants.json').then(response => response.json()).then(data => {
    let plants = data;
    
    const plantsFilteredPets = plants.filter((p) => p.toxicity === valueSelectPets);
    const plantsFilteredSun = plants.filter((s) => s.sun === valueSelectSun);
    const plantsFilteredWater = plants.filter((w) => w.water === valueSelectWateringcan);

    console.log(plantsFilteredPets);
    console.log(plantsFilteredWater);
    console.log(plantsFilteredSun);

  });
}

selectSun.addEventListener('change', (event) => {
  valueSelectSun = event.target.value;
  console.log(valueSelectSun);
  showAndHideDisplay();
  searchValues();
});

selectWateringcan.addEventListener('change', (event) => {
  valueSelectWateringcan = event.target.value;
  console.log(valueSelectWateringcan);
  showAndHideDisplay();
  searchValues();
});

selectPets.addEventListener('change', (event) => {
  valueSelectPets = event.target.value;
  console.log(valueSelectPets);
  showAndHideDisplay();
  searchValues();
});

function init() {
  document.querySelector('.results').style.display = 'none';
}

function showAndHideDisplay() {
  if(valueSelectSun === 'Select...') {
    document.querySelector('footer').style.display = 'block';
    document.querySelector('.results').style.display = 'none';
  }

  if(valueSelectSun === 'no') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
  }

  if(valueSelectSun === 'low') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
  }

  if(valueSelectSun === 'high') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
  }

  if(valueSelectWateringcan === 'Select...') {
    document.querySelector('footer').style.display = 'block';
    document.querySelector('.results').style.display = 'none';
  }

  if(valueSelectWateringcan === 'regularly') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
  }

  if(valueSelectWateringcan === 'daily') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
  }

  if(valueSelectWateringcan === 'rarely') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
  }

  if(valueSelectPets === 'Select...') {
    document.querySelector('footer').style.display = 'block';
    document.querySelector('.results').style.display = 'none';
  }

  if(valueSelectPets === 'true') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
  }

  if(valueSelectPets === 'false') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
  }
}

function createElement() {
  const listProducts = document.querySelector('.list-products');

  const products = document.createElement('li');
  products.classList.add('products');
  listProducts.appendChild(products);

  const cardsElement = document.createElement('div');
  cardsElement.classList.add('cards-elements');
  products.appendChild(cardsElement);

  const cardImage = document.createElement('img');
  cardImage.classList.add('card-image');
  const cardName = document.createElement('span');
  cardName.classList.add('product-name');
  const cardPrice = document.createElement('span');
  cardPrice.classList.add('price');

  cardsElement.appendChild(cardImage);
  cardsElement.appendChild(cardName);
  cardsElement.appendChild(cardPrice);
}
