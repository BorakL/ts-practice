import { Vehicle } from "../classes/classes-practice";

//exercise 1
let username:string = "Pera";
let isLoggedIn:boolean = true;
let favoriteNumbers:number[] = [1,2,3];

//functions
function greet(name:string):string{
    return `Hello ${name}!`;
}

let greeting = greet('Pera')

//optional parameter
export function welcomeUser(name:string, greeting?:string):string {
    return `${greeting || 'Hi'} ${name}`;
}

export function add(x:number,y:number):number{
    return x+y
}

export const multiply = (a:number, y:number): number => {
    return a*y
}


//Exercise 2
export function multiplyByTwo(num:number):number{
    return num*2;
}

export function getFullName(firstName:string, lastName?:string):string{
    return `${firstName} ${lastName || "Doe"}`
}

export const subtract = (x:number,y:number):number => {
    return x-y
}


// Function with Union Types and Type Narrowing
function formatInput(input:string|number):string|number{
    if(typeof input === "number"){
        return input*100
    }else{
        return input.toUpperCase()
    }
}

// Type Guard for Object Types
function getLength(item:string|string[]):number {
    if(typeof item === "string"){
        return item.length
    }else {
        return item.join("").length
    }
}

//Basic Object Type Annotatioin
//Define a type for a person object 
type Person = {
    name: string,
    age: number,
    isStudent: boolean
}

//Create an object with the type Person
const p1:Person = {
    name:"Pera",
    age:33,
    isStudent:false
}

const personA = {
    name:"John",
    age:32,
    isStudent:false
}
const p3:Person = personA


//Define an interface for a product
interface Product {
    id:number,
    name:string,
    price:number
}

const product:Product = {
    id:3,
    name:"Pera",
    price:334
}

//Define an interface with optional and readonly properties
interface Car {
    readonly brand: string,
    model: string,
    year?: number
}

// const car: Car = {
//     brand: "Mercedes",
//     model: "C",
//     // year: 1999
// }

//Interface with Methods
interface Calculator {
    add: (a:number,b:number)=>number;
    subtract: (a:number,b:number)=>number
}

//implement calculator interface
const simpleCalculator: Calculator = {
    add: (a,b)=>a+b,
    subtract: (a,b)=>a-b
}

//Exercises
//Exercises 1: Book library interface
interface Book{
    title: string,
    author: string,
    year?: number,
    getSummary: (title:string, atuhor:string)=>string
}
const book1:Book = {
    title: "Na Drini đuprija",
    author: "Ivo Andrić",
    year: 1950,
    getSummary: (title, author) => `${title} ${author}`
}

//Exercises2: User Profile Interface
interface UserProfile{
    username: string,
    email: string,
    isActive?: boolean,
    login: ()=>string
}

const user1: UserProfile = {
    username: "Jankoo",
    email: "janko@asdf.com",
    isActive: true,
    login(){return `Welcome ${this.username}`}
}

console.log(user1.login())

//Exercise3: Extending Interfaces
interface Person2{
    name: string,
    age: number
}
interface Employee extends Person2{
    salary: number
}
export const employee1:Employee = {
    name: "Mare",
    age:33,
    salary:33000
}
console.log(`${employee1.name} ${employee1.age} ${employee1.salary}`)


//Union Types
let id: number | string;

function printId(id: number | string){
    if(typeof id === "string"){
        console.log(`ID is a string: ${id.toUpperCase()}`)
    }else if(typeof id==="number"){
        console.log(`ID is a number: ${id.toFixed(2)}`)
    }
}

printId("abc");

//Union Type in an Object
type Shape = {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}

function getArea(shape: Shape):number {
    if(shape.kind==="circle" && shape.radius!==undefined){
        return Math.PI * shape.radius ** 2
    }else if(shape.kind==="square" && shape.sideLength!==undefined){
        return shape.sideLength**2
    }
    throw new Error("Invalid shape")
}

console.log(getArea({kind:"circle", radius:5}))
console.log(getArea({kind:"square", sideLength: 4}))


//Intersection types


//exercises
//Shape Union with Circle and Rectangle
type Circle = {
    radius:number
};
type Rectangle = {
    width: number;
    height: number
}
type Shape2 = Circle & Rectangle;
function getPerimeter(shape:Shape2):number{
    if(shape.radius!==undefined){
        return Math.PI*shape.radius**2
    }else if(shape.width!==undefined && shape.height!==undefined){
        return shape.height*shape.width
    }
    throw new Error("Invalid shape")
}

//EmployeePerson Intersection
interface Person2 {
    name: string,
    age: number
}
interface Job2 {
    title: string,
    salary: number
}

type EmployeePerson = Person2 & Job2;
const employee2:EmployeePerson = {
    name:"Donald",
    age: 77,
    title: "President",
    salary: 100000000
}
console.log(employee2)


//Narrowing Union Types with Type Assertions
type Animal = {
    type: "animal",
    legs: number
}
type Plant = {
    type: "plant",
    color: string
}
type LivingThing = Animal | Plant;
//Create function describeLivingThing that describes if thing (LinivngThing) is animal, returns: This animal has ... legs, otherwise: This plant is ... color  
export function describeLivingThing(thing: LivingThing):string {
    if((thing as Animal).legs !== undefined){
        return `This animal has ${(thing as Animal).legs} legs`;
    }else{
        return `This plant has ${(thing as Plant).color} in color`;
    }
}
console.log(describeLivingThing({type:"animal",legs:4})) 

//Intersection types
//Type Admin has two properties name (string) and privileges (array of strings)
//Type Employee2 has two properties name (string) and startDate (date)
//Type ElevatedEmployee must be Admin and Employee
type Admin = {
    name: string;
    privileges: string[];
}
type Employee2 = {
    name: string;
    startDate: Date;
}
type ElevatedEmployee = Admin & Employee2;
const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type UnknownEmployee = Admin | Employee2;

//More on type guards
function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name: ', emp.name);
    if('privileges' in emp){
        console.log('Privileges: ', emp.privileges)
    }
    if('startDate' in emp){
        console.log('Privileges: ', emp.startDate)
    }
}

printEmployeeInformation({name: 'Manu', startDate: new Date()})

class Car {
    drive(){
        console.log('Driving...')
    }
}
class Truck {
    drive(){
        console.log('Driving a truck...')
    }
    loadCargo(amount: number){
        console.log('Loading cargo...', amount)
    }
}
type Vehicle2 = Car | Truck;
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle: Vehicle2){
    vehicle.drive();
    if('loadCargo' in vehicle){
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1);
useVehicle(v2);