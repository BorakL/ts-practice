"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeLivingThing = exports.employee1 = exports.subtract = exports.getFullName = exports.multiplyByTwo = exports.multiply = exports.add = exports.welcomeUser = void 0;
//exercise 1
var username = "Pera";
var isLoggedIn = true;
var favoriteNumbers = [1, 2, 3];
//functions
function greet(name) {
    return "Hello ".concat(name, "!");
}
var greeting = greet('Pera');
//optional parameter
function welcomeUser(name, greeting) {
    return "".concat(greeting || 'Hi', " ").concat(name);
}
exports.welcomeUser = welcomeUser;
function add(x, y) {
    return x + y;
}
exports.add = add;
var multiply = function (a, y) {
    return a * y;
};
exports.multiply = multiply;
//Exercise 2
function multiplyByTwo(num) {
    return num * 2;
}
exports.multiplyByTwo = multiplyByTwo;
function getFullName(firstName, lastName) {
    return "".concat(firstName, " ").concat(lastName || "Doe");
}
exports.getFullName = getFullName;
var subtract = function (x, y) {
    return x - y;
};
exports.subtract = subtract;
// Function with Union Types and Type Narrowing
function formatInput(input) {
    if (typeof input === "number") {
        return input * 100;
    }
    else {
        return input.toUpperCase();
    }
}
// Type Guard for Object Types
function getLength(item) {
    if (typeof item === "string") {
        return item.length;
    }
    else {
        return item.join("").length;
    }
}
//Create an object with the type Person
var p1 = {
    name: "Pera",
    age: 33,
    isStudent: false
};
var personA = {
    name: "John",
    age: 32,
    isStudent: false
};
var p3 = personA;
var product = {
    id: 3,
    name: "Pera",
    price: 334
};
//implement calculator interface
var simpleCalculator = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; }
};
var book1 = {
    title: "Na Drini đuprija",
    author: "Ivo Andrić",
    year: 1950,
    getSummary: function (title, author) { return "".concat(title, " ").concat(author); }
};
var user1 = {
    username: "Jankoo",
    email: "janko@asdf.com",
    isActive: true,
    login: function () { return "Welcome ".concat(this.username); }
};
console.log(user1.login());
exports.employee1 = {
    name: "Mare",
    age: 33,
    salary: 33000
};
console.log("".concat(exports.employee1.name, " ").concat(exports.employee1.age, " ").concat(exports.employee1.salary));
//Union Types
var id;
function printId(id) {
    if (typeof id === "string") {
        console.log("ID is a string: ".concat(id.toUpperCase()));
    }
    else if (typeof id === "number") {
        console.log("ID is a number: ".concat(id.toFixed(2)));
    }
}
printId("abc");
function getArea(shape) {
    if (shape.kind === "circle" && shape.radius !== undefined) {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.kind === "square" && shape.sideLength !== undefined) {
        return Math.pow(shape.sideLength, 2);
    }
    throw new Error("Invalid shape");
}
console.log(getArea({ kind: "circle", radius: 5 }));
console.log(getArea({ kind: "square", sideLength: 4 }));
function getPerimeter(shape) {
    if (shape.radius !== undefined) {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.width !== undefined && shape.height !== undefined) {
        return shape.height * shape.width;
    }
    throw new Error("Invalid shape");
}
var employee2 = {
    name: "Donald",
    age: 77,
    title: "President",
    salary: 100000000
};
console.log(employee2);
//Create function describeLivingThing that describes if thing (LinivngThing) is animal, returns: This animal has ... legs, otherwise: This plant is ... color  
function describeLivingThing(thing) {
    if (thing.legs !== undefined) {
        return "This animal has ".concat(thing.legs, " legs");
    }
    else {
        return "This plant has ".concat(thing.color, " in color");
    }
}
exports.describeLivingThing = describeLivingThing;
console.log(describeLivingThing({ type: "animal", legs: 4 }));
var e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
//More on type guards
function printEmployeeInformation(emp) {
    console.log('Name: ', emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ', emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Privileges: ', emp.startDate);
    }
}
printEmployeeInformation({ name: 'Manu', startDate: new Date() });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo...', amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
