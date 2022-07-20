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
  infoDiv.innerHTML = `<ul>
  <li>name => ${info.name}</li>
  <li>age => ${info.age}</li>
  <li>email => ${info.email}</li>
  <li>phone => ${info.phone}</li>
  <li>Address => </li>
  <ul>
    <li>Address city => ${info.address.city}</li>
    <li>Address street => ${info.address.street}</li>
    <li>Address number => ${info.address.number}</li>
  </ul>
</ul>`;
  console.log(infoDiv);
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

function createCard(title, price, category, barcode) {
  return `
  <div class="card" style="width: 18rem">
    <div class="card-body">
     <h5 class="card-title">${title}</h5>
     <h6 class="card-subtitle mb-2 text-muted">${price}</h6>
     <a href="#" class="card-link">${category}</a>
    <a href="#" class="card-link">${barcode}</a>
</div>
</div>`;
}

function handleCards() {
  const productsInside = products;
  const cardsDiv = document.getElementById("cards");
  for (const product of productsInside) {
    const card = document.createElement("div");
    card.innerHTML = createCard(
      product.title,
      product.price,
      product.category,
      product.barcode
    );
    console.log(card);
    cardsDiv.appendChild(card);
  }
}
