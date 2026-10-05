// exercise about array methods

const products = [
  { id: 1, name: "laptop", price: 8000, stock: 5 },
  { id: 2, name: "mouse", price: 120, stock: 20 },
  { id: 3, name: "desk", price: 1500, stock: 4 },
  { id: 4, name: "keyboard", price: 300, stock: 0 },
];

// total the total price of all products in stock
// with map and reduce
const totalPrice = products.map(p => p.price * p.stock).reduce((tally, currentVal) => tally += currentVal, 0);
console.log(totalPrice);
// with reduce only
const newTotalPrice = products.reduce((acc, item) => { return acc + item.price * item.stock }, 0);
console.log(newTotalPrice);

// JS OOP recap

class Etudiant {             // declare the class
  constructor(nom, note) {  // initilize the new objects
    this.nom = nom;        // this: means the current object/instance
    this.note = note;
  }
  isAdmis() {           // class method
    return this.note > 10
  }
}

// create new objects
const etudiant1 = new Etudiant("Sara", 12);
const etudiant2 = new Etudiant("Yosef", 16);
const etudiant3 = new Etudiant("Yosef", 6);

console.log(`===etudiant1===
Nome: ${etudiant1.nom}
Note: ${etudiant1.note}
Admis: ${etudiant1.isAdmis()}
`);
console.log(`===etudiant2===
Nome: ${etudiant2.nom}
Note: ${etudiant2.note}
Admis: ${etudiant2.isAdmis()}
`);
console.log(`===etudiant3===
Nome: ${etudiant3.nom}
Note: ${etudiant3.note}
Admis: ${etudiant3.isAdmis()}
`);

// inheritance in JS OOP

class Personne {
  constructor(nom) {
    this.nom = nom;
  }

  sePresenter() {
    return `Je suis ${this.nom}`;
  }
}

class Student extends Personne {
  constructor(nom, note) {
    super(nom);
    this.note = note
  }
}
const student1 = new Student("Ali", 13);
console.log(student1);
console.log(student1.sePresenter());

