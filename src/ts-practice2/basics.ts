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

const car: Car = {
    brand: "Mercedes",
    model: "C",
    // year: 1999
}

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