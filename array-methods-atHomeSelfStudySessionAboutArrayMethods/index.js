// Javascript Prerequisits for React

// I/ Array methods (ES6)

// I/1) .map method

// create a fixed array named numbers containing the values 1,3, and 3
const numbers = [1, 2, 3];
// create a new container(an array) named doubled. Take the numbers array, and apply a transformation rule to every single item in it
const doubled = numbers.map(num => num * 2); // num => : for each iteration, call the current item num and pass it to the right
                                            // num * 2); : multiply num by 2, return that new value into the new array, and close the operation
console.log(numbers); // [1, 2, 3]
console.log(doubled); // [2, 4, 6]

// I/2) .filter method

const prices = [10, 25, 50];
// create a new container(an array) named cheapPrices. Iterate through the prices arrya and run a security check on every item
const cheapPrices = prices.filter(price => price < 30); // price => call the current value being inspected price
                                                       // price < 30); : Ask: Is price strictly less than 30?
                                                      // If true, let it pass into the new list. If false, discard it
console.log(prices); // [10, 25, 50]
console.log(cheapPrices); // [10, 25]

// I/3) .find method The single item lookup

// create a fixed(ie: immutable) array of objects, each object contains a single key-value pair
const users = [{id: 1}, {id: 2}];
// create a new container named user. Look through the users arrya and stop the momend you find the first item that matches the condition
const user = users.find(u => u.id === 2); // u => : Temporarily label the item being checked as u
                                         // u.id === 2); : Look inside u(which is an object) for its id property.
                                        // Ask: Does id strictly equal 2? The moment this statement becomes true,
                                       // immediately return that exact object and stop seraching
console.log (user); // {id: 2}

// II/ Splitting Arrays
//
// II/1) Destructuring
//
// Why React uses it: React requires "immutable" state updates. You cannot alter an existing array directly; you must create a new copy with changes

const oldList = [1, 2];
// create a brand new array constainer named newList
const newList = [...oldList, 3]; // ...oldList, : The three dots ... mean "unpack" or "spread".
                                // Unpack all individual items from inside oldListand drop them into this new container newList,
                               // in other words, take the existing array and copy its content directly into the new one
                              // Add the value 3 to the end of this new array, then seal the container
console.log(newList); // [1, 2, 3]


