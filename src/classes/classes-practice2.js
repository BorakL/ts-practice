"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = exports.Manager = exports.Person1 = void 0;
//Basic class structure
//properties: name (string)
//methods: speak
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log("".concat(this.name, " make sound."));
    };
    return Animal;
}());
var animal = new Animal("Dog");
console.log("dog", animal.speak());
//Properties
//properties: private ssn (string), name (string)
//methods: getSSN
var Person1 = /** @class */ (function () {
    function Person1(ssn, name) {
        this.ssn = ssn;
        this.name = name;
    }
    Person1.prototype.getSSN = function () {
        return this.ssn;
    };
    return Person1;
}());
exports.Person1 = Person1;
//Protected properties
//Create class Employee, with protected property salary. Create Manager class that extends class Employee, and has one method getSalary
var Employee = /** @class */ (function () {
    function Employee(salary) {
        this.salary = salary;
    }
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.getSalary = function () {
        return this.salary;
    };
    return Manager;
}(Employee));
exports.Manager = Manager;
//Methods
//Create calcultor class with static methods for calculating operations
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (a, b) {
        return a + b;
    };
    Calculator.subtraction = function (a, b) {
        return a - b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//Abstract Methods
//Create class Vehicle and add abstract method start that return void.
//Create class Car that extends class Vehicle and implement method start.
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.start = function () {
        console.log("Car started");
    };
    return Car;
}(Vehicle));
//Abstract Classes
//Create abstract class Shape that has abstract method area which return number, and has method describe which consolog "This is a shape"
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.describe = function () {
        console.log("This is a shape");
    };
    return Shape;
}());
//Create class Circle that extends Shape and has public property radius, and method area that return number.
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return this.radius * Math.pow(Math.PI, 2);
    };
    return Circle;
}(Shape));
