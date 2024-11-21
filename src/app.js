"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_practice_1 = require("./classes/classes-practice");
var department_1 = require("./classes/department");
var basics_1 = require("./ts-practice2/basics");
var accounting = new department_1.Department("accounting");
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// accounting.describe()
var person1 = new classes_practice_1.Person("Marko", 44, "Mare");
console.log(person1.getAge());
// console.log(person1.nickname)
var car1 = new classes_practice_1.Car("Opel", 22000);
// car1.changePrice(3000)
console.log(car1.price);
console.log((0, basics_1.welcomeUser)("John", "Hello"));
console.log((0, basics_1.add)(3, 4));
console.log((0, basics_1.multiply)(3, 5));
console.log((0, basics_1.multiplyByTwo)(34));
console.log((0, basics_1.getFullName)("John"));
console.log("".concat(basics_1.employee1.name, " ").concat(basics_1.employee1.age, " ").concat(basics_1.employee1.salary));
console.log((0, basics_1.describeLivingThing)({ type: "animal", legs: 4 }));
var paragrap = document.getElementById("paragraph");
