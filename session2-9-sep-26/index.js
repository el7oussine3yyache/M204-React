// exercise about array methods

const products = [
  { id: 1, name: "laptop", price: 8000, stock: 5 },
  { id: 2, name: "mouse", price: 120, stock: 20 },
  { id: 3, name: "desk", price: 1500, stock: 4 },
  { id: 4, name: "keyboard", price: 300, stock: 0 },
];

// show products in stock
const filterdStock = products.filter(item => item.stock > 0);
console.log(filterdStock);

// show the names of the products
const productsNames = products.map(item => item.name);
console.log(productsNames);

// show the names of the products currently in stock
const productsInStock = products.filter(item => item.stock > 0).map(item => item.name);
console.log(`The names of the products currently in stock: ${productsInStock}`);

// modify the price of the product with id=2 to 150 without mutating the og array of products
const newProductsList = products.map(item => {
  return item.id === 2 ? { ...item, price: 150 } : item
});
console.log(newProductsList);

// return only the name of the products that are available in stock and their prices are over 500, awaited result ["laptop", "desk"]
const newList = products.filter(item => item.price > 500 && item.stock > 0).map(item => item.name);
console.log(newList);

