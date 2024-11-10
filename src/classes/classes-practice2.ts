//Basic class structure
//properties: name (string)
//methods: speak
class Animal {
    name:string;
    constructor(name:string){
        this.name = name
    }
    speak():void{
        console.log(`${this.name} make sound.`)
    }
}

const animal = new Animal("Dog")
console.log("dog", animal.speak())

//Properties
//properties: private ssn (string), name (string)
//methods: getSSN
export class Person1 {
    private ssn:string;
    name: string;
    constructor(ssn:string, name:string){
        this.ssn = ssn;
        this.name = name;
    }
    getSSN(){
        return this.ssn
    }
}   

//Protected properties
//Create class Employee, with protected property salary. Create Manager class that extends class Employee, and has one method getSalary
class Employee {
    protected salary: number;
    constructor(salary:number){
        this.salary = salary
    }
}
export class Manager extends Employee {
    getSalary(){
        return this.salary
    }
}

//Methods
//Create calcultor class with static methods for calculating operations
export class Calculator {
    static add(a:number,b:number):number{
        return a+b;
    }
    static subtraction(a:number,b:number):number{
        return a-b;
    }
}

//Abstract Methods
//Create class Vehicle and add abstract method start that return void.
//Create class Car that extends class Vehicle and implement method start.
abstract class Vehicle{
    abstract start():void
}
class Car extends Vehicle{
    start(){
        console.log("Car started")
    }
}

//Abstract Classes
//Create abstract class Shape that has abstract method area which return number, and has method describe which consolog "This is a shape"
abstract class Shape {
    abstract area():number;
    describe(){
        console.log("This is a shape")
    }
}

//Create class Circle that extends Shape and has public property radius, and method area that return number.
class Circle extends Shape{
    public radius;
    constructor(radius:number){
        super();
        this.radius = radius;
    }
    area():number{
        return this.radius*Math.PI**2;
    }
}