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
exports.Car = exports.Vehicle = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, nickname) {
        this.name = name;
        this.age = age;
        this.nickname = nickname;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
exports.Person = Person;
var Vehicle = /** @class */ (function () {
    function Vehicle(type) {
        this.type = type;
    }
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(model, price) {
        var _this = _super.call(this, "Car") || this;
        _this.model = model;
        _this.price = price;
        return _this;
    }
    Car.prototype.changePrice = function (newPrice) {
        this.price = newPrice;
    };
    return Car;
}(Vehicle));
exports.Car = Car;
// class Employee extends Person {
//     salary: number;
//     constructor(salary:number, name:string, age:number){
//         super(name, age);
//         this.salary = salary
//     }
// }
