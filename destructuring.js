// Object Destructuring
const person = {
  name: "Ashraful",
  age: 19,
  profession: "student",
};

const { name, age, profession } = person;
console.log(name, age, profession);

const products = {
  product1: {
    name: "Laptop",
    brand: "lenovo",
    price: 18000,
  },
  product2: {
    name: "Camera",
    brand: "canon",
    price: 7000,
  },
  product3: {
    name: "phone",
    brand: "iphone",
    price: 10000,
  },
};

const { product1, product2, product3 } = products;
console.log(product1);
console.log(product2);
console.log(product3);

// Array Destructuring
const friends = ["Siam", "Ashraful", "Mehedi", "Mobile"];
const [f1, f2] = friends;
console.log(f1, f2);

const phones = [
  {
    name: "Samsung S7",
    brand: "samsung",
    price: 2500,
  },
  {
    name: "Iphone 14",
    brand: "iphone",
    price: 25000,
  },
  {
    name: "Walton Bangla Mobile",
    brand: "walton",
    price: 1500,
  },
  {
    name: "Symphony S7 Ultra Pro Plus",
    brand: "symphony",
    price: 3000,
  },
];

// console.log([...phones]);

const [phone1, phone2, phone3, phone4] = phones;
console.log(phone1);
console.log(phone2);
console.log(phone3);
console.log(phone4);
