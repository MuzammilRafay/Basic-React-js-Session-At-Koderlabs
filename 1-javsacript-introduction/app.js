//var let, const

var tempVar = "working";

console.log(tempVar);

/*

If you use var outside of a function, it belongs to the global scope.

If you use var inside of a function, it belongs to that function.

If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

*/

/*
{
    
}

*/

var company = "koderlabs";

function working() {}

function working2() {
  var name = "muzammil rafay";
  console.log(name);
}

working2();

if (true) {
  var student = "developers";
}

console.log(student);

//let

// specific scope

// {

// }

// {
//   let students = "developers";
// }

// console.log(students);

//const = constant variables

// const companyName = "koderlabs";
// companyName = "koderlabsss";

//template literal

const firstName = "Muhammad";
const lastName = "Muhammad";

// const fullName = firstName + " " + lastName;
const fullName = `${firstName} ${lastName}`; //line break

//Array Methods

const products = [
  {
    id: 1,
    name: "Product One",
    price: 100,
  },
  {
    id: 2,
    name: "Product Two",
    price: 200,
  },
  {
    id: 3,
    name: "Product Three",
    price: 300,
  },
  {
    id: 4,
    name: "Product Four",
    price: 400,
  },
];

//map return new array
let productNewArray;

productNewArray = products.map((singleProduct) => {
  return {
    productName: singleProduct.name,
    productPrice: singleProduct.price,
  };
});

console.time();
products.forEach((singleProduct) => {});
console.timeEnd();

productNewArray = products.filter((singleProduct) => {
  return singleProduct.id !== 1;
});

//array find (return one object or value)
productNewArray = products.find((singleProduct) => {
  return singleProduct.id == 1;
});

//array findIndex (it will return you the index of array)
productNewArray = products.findIndex((singleProduct) => {
  return singleProduct.id == 1;
});

//array some (return boolean)
//if some values have price greater then 300 so it will return true
productNewArray = products.some((singleProduct) => {
  return singleProduct.price > 300;
});

//array every (return boolean)
//if all values have price greater then 0 so it will return true
productNewArray = products.every((singleProduct) => {
  return singleProduct.price > 300;
});

//array push (add new value at the end of array)
products.push({ name: "New Value", price: 500 });

//array pop (last value remove from array)
products.pop();

//array shift ( remove first value from array
products.shift();

//array reduce
// 1st param accumulated = jama karne wala
// 2nd param accumulated = single
const total = products.reduce((accumulated, singleProduct) => {
  //   console.log(accumulated, "accumulated");
  //   console.log(singleProduct, "singleProduct");
  return accumulated + singleProduct.price;
}, 0);

// const total = products.reduce(
//   (accumulated, singleProduct) => accumulated + singleProduct.price,
//   0
// );

// arrow function
hello = function () {
  return "Hello World!";
};

hello = () => {
  return "Hello World!";
};

// Arrow Functions Return Value by Default:
hello = () => "Hello World!";

// Arrow Function Without Parentheses if you have only one param:
// hello = val => "Hello " + val;

// hell('working');

//destructuring with array
const vehicles = ["mustang", "f-150", "expedition"];
// vehicles[0];
// vehicles[1];
// vehicles[2];

const supperArray = [];

// const indexArr = supperArray.findIndex(singleArray => singleArray === 1);
// supperArray[indexArr];

const [car, truck, suv] = vehicles;

//second example

// const vehicles = ["mustang", "f-150", "expedition"];

// const [car, , suv] = vehicles;

//destructuring with objects
const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

// vehicleOne.type

const { type, color, brand, model } = vehicleOne;

// console.log(productNewArray, "productNewArray");

//primitive vs reference

// object / array = reference type

const objectOne = { name: "muzammil" };
// const objectTwo = objectOne;
const objectTwo = { ...objectOne };
//spred operator clone

objectTwo.name = "musaddiq";

console.log(objectOne, "object One");
console.log(objectTwo, "object two");

//Spread Operator
const numbersOne = [1, 2, 3];
// const numbersTwo = numbersOne;
const numbersTwo = [...numbersOne];

numbersTwo.push(20);

// console.log(numberOne);
// console.log(numberTwo);

//primitive type example
// const numberOne = 10;
// const numberTwo = numberOne;

numberTwo = 20;

// console.log(numberOne); //10
// console.log(numberTwo); //20

//desturing with rest operator

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

console.log(rest, "rest");
