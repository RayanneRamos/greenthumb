let selectSun = document.querySelector('.first-select');
let selectWateringcan = document.querySelector('.second-select');
let selectPets = document.querySelector('.third-select');
let valueSelectSun;
let valueSelectWateringcan;
let valueSelectPets;

init();

selectSun.addEventListener('change', (event) => {
  valueSelectSun = event.target.value;
  console.log(valueSelectSun);
  showAndHideDisplay();
  apiConnect();
  setTimeout();
});

selectWateringcan.addEventListener('change', (event) => {
  valueSelectWateringcan = event.target.value;
  console.log(valueSelectWateringcan);
  showAndHideDisplay();
  apiConnect();
  setTimeout();
});

selectPets.addEventListener('change', (event) => {
  valueSelectPets = event.target.value;
  console.log(valueSelectPets);
  showAndHideDisplay();
  apiConnect();
  setTimeout();
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

function apiConnect() {
  fetch('../plants.json').then(response => response.json()).then((data) => {
    data.map((item) => {
      const plantData = {
        id: item.id,
        name: item.name,
        sun: item.sun,
        water: item.water,
        pets: item.toxicity,
        image: item.url,
        price: item.price,
      }

      if(valueSelectSun === plantData.sun) {
        const listProducts = document.querySelector('.list-products');

        const products = document.createElement('li');
        listProducts.appendChild(products);
        products.classList.add('products');

        const cardsElement = document.createElement('div');
        products.appendChild(cardsElement);
        cardsElement.classList.add('cards-elements');

        const cardImage = document.createElement('img');
        cardImage.classList.add('card-image');
        cardImage.innerHTML = `<img src=${plantData.image} alt=${plantData.name} />`;

        const cardName = document.createElement('span');
        cardName.classList.add('product-name');
        cardName.innerHTML = `<span>${plantData.name}</span>`

        const cardPrice = document.createElement('span');
        cardPrice.classList.add('price');
        cardPrice.innerHTML = `<span>${plantData.price}</span>`;

        cardsElement.appendChild(cardImage);
        cardsElement.appendChild(cardName);
        cardsElement.appendChild(cardPrice);
      }

      if(valueSelectWateringcan === plantData.water) {
        const listProducts = document.querySelector('.list-products');

        const products = document.createElement('li');
        listProducts.appendChild(products);
        products.classList.add('products');

        const cardsElement = document.createElement('div');
        products.appendChild(cardsElement);
        cardsElement.classList.add('cards-elements');

        const cardImage = document.createElement('img');
        cardImage.classList.add('card-image');
        cardImage.innerHTML = `<img src=${plantData.image} alt=${plantData.name} />`;

        const cardName = document.createElement('span');
        cardName.classList.add('product-name');
        cardName.innerHTML = `<span>${plantData.name}</span>`

        const cardPrice = document.createElement('span');
        cardPrice.classList.add('price');
        cardPrice.innerHTML = `<span>${plantData.price}</span>`;

        cardsElement.appendChild(cardImage);
        cardsElement.appendChild(cardName);
        cardsElement.appendChild(cardPrice);
      }

      if(valueSelectPets === plantData.pets) {
        const listProducts = document.querySelector('.list-products');

        const products = document.createElement('li');
        listProducts.appendChild(products);
        products.classList.add('products');

        const cardsElement = document.createElement('div');
        products.appendChild(cardsElement);
        cardsElement.classList.add('cards-elements');

        const cardImage = document.createElement('img');
        cardImage.classList.add('card-image');
        cardImage.innerHTML = `<img src=${plantData.image} alt=${plantData.name} />`;

        const cardName = document.createElement('span');
        cardName.classList.add('product-name');
        cardName.innerHTML = `<span>${plantData.name}</span>`

        const cardPrice = document.createElement('span');
        cardPrice.classList.add('price');
        cardPrice.innerHTML = `<span>${plantData.price}</span>`;

        cardsElement.appendChild(cardImage);
        cardsElement.appendChild(cardName);
        cardsElement.appendChild(cardPrice);
      }
    });
  });
}


setTimeout(() => {
  selectSun = 'Select...';
  selectWateringcan = 'Select...';
  selectPets = 'Select...';
}, 5000);