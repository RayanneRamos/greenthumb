let selectSun = document.querySelector('.first-select');
let selectWateringcan = document.querySelector('.second-select');
let selectPets = document.querySelector('.third-select');
let valueSelectSun;
let valueSelectWateringcan;
let valueSelectPets;
let resetSelectSun = document.querySelector('#select-sun')
let resetSelectWateringcan = document.querySelector('#select-wateringcan');
let resetSelectPets = document.querySelector('#select-pets');

init();

selectSun.addEventListener('change', (event) => {
  valueSelectSun = event.target.value;
  console.log(valueSelectSun);
  showAndHideDisplay();
  apiConnect();

  setTimeout(() => {
    resetSelectSun.value = '';
  }, 3000);
});

selectWateringcan.addEventListener('change', (event) => {
  valueSelectWateringcan = event.target.value;
  console.log(valueSelectWateringcan);
  showAndHideDisplay();
  apiConnect();

  setTimeout(() => {
    resetSelectWateringcan.value = '';
  }, 3000);
});

selectPets.addEventListener('change', (event) => {
  valueSelectPets = event.target.value;
  console.log(valueSelectPets);
  showAndHideDisplay();
  apiConnect();

  setTimeout(() => {
    resetSelectPets.value = '';
  }, 3000)
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

    setTimeout(() => {
      document.querySelector('.results').style.display = 'none';
      document.querySelector('footer').style.display = 'block';
    }, 10000);
  }

  if(valueSelectSun === 'low') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';

    setTimeout(() => {
      document.querySelector('.results').style.display = 'none';
      document.querySelector('footer').style.display = 'block';
    }, 10000);
  }

  if(valueSelectSun === 'high') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';

    setTimeout(() => {
      document.querySelector('.results').style.display = 'none';
      document.querySelector('footer').style.display = 'block';
    }, 10000);
  }

  if(valueSelectWateringcan === 'Select...') {
    document.querySelector('footer').style.display = 'block';
    document.querySelector('.results').style.display = 'none';
  }

  if(valueSelectWateringcan === 'regularly') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';

    setTimeout(() => {
      document.querySelector('.results').style.display = 'none';
      document.querySelector('footer').style.display = 'block';
    }, 10000);
  }

  if(valueSelectWateringcan === 'daily') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';

    setTimeout(() => {
      document.querySelector('.results').style.display = 'none';
      document.querySelector('footer').style.display = 'block';
    }, 10000);
  }

  if(valueSelectWateringcan === 'rarely') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';

    setTimeout(() => {
      document.querySelector('.results').style.display = 'none';
      document.querySelector('footer').style.display = 'block';
    }, 10000);
  }

  if(valueSelectPets === 'Select...') {
    document.querySelector('footer').style.display = 'block';
    document.querySelector('.results').style.display = 'none';
  }

  if(valueSelectPets === 'true') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';

    setTimeout(() => {
      document.querySelector('.results').style.display = 'none';
      document.querySelector('footer').style.display = 'block';
    }, 10000);
  }

  if(valueSelectPets === 'false') {
    document.querySelector('footer').style.display = 'none';
    document.querySelector('.results').style.display = 'block';

    setTimeout(() => {
      document.querySelector('.results').style.display = 'none';
      document.querySelector('footer').style.display = 'block';
    }, 10000);
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
