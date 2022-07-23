function handleClick() {
  const firstNum = Number(document.getElementById("inputFirstNumber").value);
  const secondNum = Number(document.getElementById("inputSecondNumber").value);
  const numbersContainer = document.getElementById("numbersContainer");

  for (let i = firstNum; i <= secondNum; i++) {
    if (i % 2 === 0) {
      numbersContainer.innerHTML += `<li>${i} is even</li> <br>`;
    }
  }
}

function handleInfo() {
  const info = {
    name: "daniel",
    age: 23,
    email: "d@notmyrealmail.com",
    phone: "058666666😈",
    address: {
      city: "tlv",
      street: "not found",
      number: 666,
    },
  };
  const infoDiv = document.getElementById("infoDiv");
  infoDiv.innerHTML = ``;
  infoDiv.appendChild(createCard(info));
}

function createCard(cardInfo) {
  const cardUl = document.createElement("ul");

  for (const key in cardInfo) {
    const cardLi = document.createElement("li");
    if (typeof cardInfo[key] === "object") {
      cardLi.innerHTML = `<li> ${key} =>`;
      cardUl.appendChild(cardLi);
      cardUl.appendChild(createCard(cardInfo[key]));
    } else {
      cardLi.innerHTML = `<li> ${key} => ${cardInfo[key]}`;
      cardUl.appendChild(cardLi);
    }
  }
  return cardUl;
}

const products = [
  {
    title: "shampoo",
    price: 23.4,
    category: "shower",
    barcode: "4043945",
  },
  {
    title: "cornflakes",
    price: 60,
    category: "food",
    barcode: "A-5455",
  },
  {
    title: "Cola",
    price: 80.5,
    category: "drinks",
    barcode: "B-986453",
  },
  {
    title: "Bamba red",
    price: 90.3,
    category: "food",
    barcode: "C-68645",
  },
];

function handleCards() {
  const productsInside = products;
  const cardsDiv = document.getElementById("cards");
  for (const product of productsInside) {
    const card = document.createElement("div");
    card.appendChild(createCard(product));
    cardsDiv.appendChild(card);
  }
}
