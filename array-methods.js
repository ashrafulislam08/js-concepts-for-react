const products = [
  { name: "laptop", price: 32000, brand: "lenovo", color: "Silver" },
  { name: "phone", price: 7000, brand: "iphone", color: "golden" },
  { name: "watch", price: 3000, brand: "casio", color: "yellow" },
  { name: "sunglasses", price: 300, brand: "ribon", color: "black" },
  { name: "canon", price: 9000, brand: "canon", color: "gray" },
];

// map

const brands = products.map((product) => product.brand);
console.log(brands);
const prices = products.map((product) => product.price);
console.log(prices);

// forEach
products.forEach((product) => {
  console.log(product.name);
});

// filter
const cheap = products.filter((product) => product.price <= 5000);
console.log(cheap);
