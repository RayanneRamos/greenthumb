const selectSun = document.querySelector(".first-select");
const selectWateringcan = document.querySelector(".second-select");
const selectPets = document.querySelector(".third-select");
const footer = document.querySelector("footer");
const results = document.querySelector(".results");
const sun = document.querySelector("#select-sun");
const water = document.querySelector("#select-wateringcan");
const pets = document.querySelector("#select-pets");
let valueSelectSun = null;
let valueSelectWateringcan = null;
let valueSelectPets = null;

const plantsOfAvailable = [
  {
    id: 1,
    name: "Euphorbia eritrea",
    sun: "high",
    water: "rarely",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/euphorbia-eritrea.png",
    price: 25,
    toxicity: false,
  },
  {
    id: 2,
    name: "Succulent Bowl",
    sun: "high",
    water: "rarely",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/succulent-bowl.png",
    price: 30,
    toxicity: false,
  },
  {
    id: 3,
    name: "Bunny ears cacti",
    sun: "high",
    water: "rarely",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/bunny-ears-cacti.png",
    price: 20,
    toxicity: false,
  },
  {
    id: 4,
    name: "Ficus lyrata",
    sun: "high",
    water: "regularly",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/ficus-lyrata.png",
    price: 30,
    toxicity: false,
  },
  {
    id: 5,
    name: "Bamboo",
    sun: "low",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/lucky-bamboo.png",
    water: "regularly",
    price: 15,
    toxicity: false,
  },
  {
    id: 6,
    name: "Ponytail Palm",
    sun: "low",
    water: "regularly",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/ponytail-palm.png",
    price: 50,
    toxicity: false,
  },
  {
    id: 7,
    name: "Pilea peperomioides",
    sun: "no",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/pilea-peperomioides.png",
    water: "regularly",
    price: 50,
    toxicity: true,
  },
  {
    id: 8,
    name: "Calathea triostar",
    sun: "no",
    water: "daily",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/calathea-triostar.png",
    price: 50,
    toxicity: true,
  },
  {
    id: 9,
    name: "Monstera deliciosa",
    sun: "no",
    url: "https://storage.googleapis.com/front-br-challenges.appspot.com/green-thumb-v2/plants/monstera-deliciosa.png",
    water: "daily",
    price: 50,
    toxicity: true,
  },
];

selectSun.addEventListener("change", (event) => {
  valueSelectSun = event.target.value;
  console.log(valueSelectSun);
  filterSelectSun();
  resultsSelectSun();

  setTimeout(() => {
    sun.value = "";
  }, 3000);
});

selectWateringcan.addEventListener("change", (event) => {
  event.preventDefault();
  valueSelectWateringcan = event.target.value;
  console.log(valueSelectWateringcan);
  filterSelectWateringcan();
  resultsSelectWateringcan();

  setTimeout(() => {
    water.value = "";
  }, 3000);
});

selectPets.addEventListener("change", (event) => {
  event.preventDefault();
  valueSelectPets = event.target.value;
  console.log(valueSelectPets);
  filterSelectPets();
  resultsSelectPets();

  setTimeout(() => {
    pets.value = "";
  }, 3000);
});

function filterSelectSun() {
  const listProducts = document.querySelector(".list-products");
  listProducts.innerHTML = "";

  const filteredSelectSun = plantsOfAvailable
    .filter((s) => s.sun === valueSelectSun)
    .map((plant) => {
      const products = document.createElement("li");
      listProducts.appendChild(products);
      products.classList.add("products");

      const cardElement = document.createElement("div");
      products.appendChild(cardElement);
      cardElement.classList.add("cards-elements");

      const cardImage = document.createElement("img");
      cardImage.classList.add("card-image");
      cardImage.innerHTML = `<img src=${plant.url} alt=${plant.name} />`;

      const cardName = document.createElement("span");
      cardName.classList.add("product-name");
      cardName.innerHTML = `<span>${plant.name}</span>`;

      const cardPrice = document.createElement("span");
      cardPrice.classList.add("price");
      cardPrice.innerHTML = `<span>${plant.price}</span>`;

      cardElement.appendChild(cardImage);
      cardElement.appendChild(cardName);
      cardElement.appendChild(cardPrice);
    });

  return filteredSelectSun;
}

function filterSelectWateringcan() {
  const listProducts = document.querySelector(".list-products");
  listProducts.innerHTML = "";

  const filteredSelectWateringcan = plantsOfAvailable
    .filter((w) => w.water === valueSelectWateringcan)
    .map((plant) => {
      const products = document.createElement("li");
      listProducts.appendChild(products);
      products.classList.add("products");

      const cardsElement = document.createElement("div");
      products.appendChild(cardsElement);
      cardsElement.classList.add("cards-elements");

      const cardImage = document.createElement("img");
      cardImage.classList.add("card-image");
      cardImage.innerHTML = `<img src=${plant.url} alt=${plant.name} />`;

      const cardName = document.createElement("span");
      cardName.classList.add("product-name");
      cardName.innerHTML = `<span>${plant.name}</span>`;

      const cardPrice = document.createElement("span");
      cardPrice.classList.add("price");
      cardPrice.innerHTML = `<span>${plant.price}</span>`;

      cardsElement.appendChild(cardImage);
      cardsElement.appendChild(cardName);
      cardsElement.appendChild(cardPrice);
    });

  return filteredSelectWateringcan;
}

function filterSelectPets() {
  const listProducts = document.querySelector(".list-products");
  listProducts.innerHTML = "";

  const filteredSelectPets = plantsOfAvailable
    .filter((p) => String(p.toxicity) === valueSelectPets)
    .map((plant) => {
      const products = document.createElement("li");
      listProducts.appendChild(products);
      products.classList.add("products");

      const cardsElement = document.createElement("div");
      products.appendChild(cardsElement);
      cardsElement.classList.add("cards-elements");

      const cardImage = document.createElement("img");
      cardImage.classList.add("card-image");
      cardImage.innerHTML = `<img src=${plant.url} alt=${plant.name} />`;

      const cardName = document.createElement("span");
      cardName.classList.add("product-name");
      cardName.innerHTML = `<span>${plant.name}</span>`;

      const cardPrice = document.createElement("span");
      cardPrice.classList.add("price");
      cardPrice.innerHTML = `<span>${plant.price}</span>`;

      cardsElement.appendChild(cardImage);
      cardsElement.appendChild(cardName);
      cardsElement.appendChild(cardPrice);
    });

  return filteredSelectPets;
}

function resultsSelectSun() {
  if (
    valueSelectSun === "no" ||
    valueSelectSun === "low" ||
    valueSelectSun === "high"
  ) {
    results.style.display = "block";
    footer.style.display = "none";
  } else {
    results.style.display = "none";
    footer.style.display = "block";
  }
}

function resultsSelectWateringcan() {
  if (
    valueSelectWateringcan === "regularly" ||
    valueSelectWateringcan === "daily" ||
    valueSelectWateringcan === "rarely"
  ) {
    results.style.display = "block";
    footer.style.display = "none";
  } else {
    results.style.display = "none";
    footer.style.display = "block";
  }
}

function resultsSelectPets() {
  if (valueSelectPets === "true" || valueSelectPets === "false") {
    results.style.display = "block";
    footer.style.display = "none";
  } else {
    results.style.display = "none";
    footer.style.display = "block";
  }
}
