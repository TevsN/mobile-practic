class Phone {
  constructor(model, manufacture, price, color, inStock) {
    this.model = model;
    this.manufacture = manufacture;
    this.price = price;
    this.color = color;
    this.inStock = inStock;
  }
}

function getPhones(amount) {
  const newPhones = [];

  for (let i = 0; i < amount; i++) {
    newPhones.push(
      new Phone(
        `Model ${i}`,
        "Samsingus",
        this.getRandomInt(2500, 25000),
        "pink",
        Math.random() >= 0.5
      )
    );
  }
  return newPhones;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const phones = getPhones(50);
console.table(phones);

// 1

function getPhonesNumber(phones){

let amount = 0;

const forEachCallback = function (phone) {
  if (phone.inStock) {
    amount++;
  }
  return amount;
};

phones.forEach(forEachCallback);

return amount;

}

// 1.1

function getPhonesInfo (phonesArray) {
    const callback = function (phone) {
        console.log(`${phone.manufacture} ${phone.model} price: ${phone.price}$ in stock: ${phone.inStock}`)
    }
    phonesArray.forEach(callback);
}

// 2

const phonesInStock = phones.filter(function (phone){
  return phone.inStock;
});

// 3

const phonesDiscount = phonesInStock.map(function(phone) {
    if(phone.price > 15000) {
        phone.sellPrice = Math.round(phone.price * 0.7);  
    }
    return phone;
});

// advanced