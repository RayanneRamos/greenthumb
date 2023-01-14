let selectSun = document.querySelector('.first-select');
let selectWateringcan = document.querySelector('.second-select');
let selectPets = document.querySelector('.third-select');
let valueSelectSun;
let valueSelectWateringcan;
let valueSelectPets;
let plants = [];
let resultsCards = document.querySelector('.results-cards');
let noResults = document.querySelector('.no-results');
let searchResults = document.querySelector('.results')

init();

fetch('../plants.json').then(response => response.json()).then(data => {
  plants = data;
  console.log(plants);

  const plantData = {
    id: data.id,
    title: data.name,
    sun: data.sun,
    wateringcan: data.water,
    image: data.url,
    price: data.price,
    pets: data.toxicity,
  }

  plants.push(plantData);
  return plantData;
});

selectSun.addEventListener('change', (event) => {
  valueSelectSun = event.target.value;
  console.log(valueSelectSun);
  showAndHideDisplay();
});

selectWateringcan.addEventListener('change', (event) => {
  valueSelectWateringcan = event.target.value;
  console.log(valueSelectWateringcan);
  showAndHideDisplay();
});

selectPets.addEventListener('change', (event) => {
  valueSelectPets = event.target.value;
  console.log(valueSelectPets);
  showAndHideDisplay();
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
