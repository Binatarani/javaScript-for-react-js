// (1)ver let const

// //var example

// var firstName = "Benu";
// console.log(firstName);
// firstName = "Rani";
// console.log(firstName);

// //let example
// let lastName = "Rani";
// console.log(lastName);
// lastName = "pk";
// console.log(lastName);

// //const example
// const firstName = "Benu";
// console.log(firstName);
// firstName = "Rani"; //Assignment to constant variable.
// console.log(firstName);

//(2) Arrow function

// //example 1
// function showText(text) {
//   console.log(text);
// }
// showText("JavaScript Text");

// // example 2
// const showText2 = (text) => {
//   console.log(text);
// };
// showText2("Arrow Function");

// // example 3
// const showText3 = () => {
//   console.log("Arrow Function");
// };
// showText3();

// // example 4

// const showResult = (Number) => {
//   return Number * 2;
// };
// console.log(showResult(2));

// // example 5

// const showResult2 = (Number) => Number * 3;
// console.log(showResult2(2));

//Spread operator
// // array example
// const num1 = [1, 2, 3, 4];
// console.log(num1);

// const num2 = [...num1, 5, 6];
// console.log(num2);

// // Object example

// const user1 = {
//   fName: "Benu",
//   lName: "Rani",
// };
// console.log(user1);

// const user2 = {
//   ...user1,
//   age: 30,
// };
// console.log(user2);

// // another example

// // const getNumbers = (n1,n2,n3,n4)=>{};
// const getNumbers = (...number) => {
//   console.log(number[2]);
// };
// getNumbers(2, 4, 6);

// (4) Destructurinng

//Array example
//const num1 = [1, 2, 3, 4];
// const n1 = num1[0];
// const n2 = num1[1];
// console.log(n1);
// console.log(n2);

// const num1 = [1, 2, 3, 4];
// // const [n1, n2, n3] = num1;
// const [n1, , n3] = num1;
// console.log(n1);
// // console.log(n2);
// console.log(n3);

// const user2 = {
//   fname: "Amit",
//   lName: "Pramanik",
//   age: 32,
// };
// const firstName = user2.fname;
// const lastName = user2.lName;
// console.log(firstName);
// console.log(lastName);

// const { age, fname, lName } = user2;
// console.log(age);
// console.log(fname);
// console.log(lName);

// // (5) Map
// const num1 = [2, 4, 6];
// num1.map((num) => {
//   // console.log(num * 2);
//   // console.log(num + 2);
//   // console.log(num - 2);
//   console.log(num / 2);
// });

//(6) Filter()
// (7) Reduce()

// // (8) JavaScript Class

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     return 2023 - this.year;
//   }
// }
// const myCar = new Car("BMW", 2022);
// const yourCar = new Car("Ford", 2023);
// console.log(myCar);
// console.log(yourCar);

// console.log(myCar.age());

//(7) Export & Inport
