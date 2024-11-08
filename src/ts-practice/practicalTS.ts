import { config } from "process";

const books = ['1984','Brave New World','Fahrenheit 451'];

// let foundBook: string;   //2. We have to allowed undefined type along string type
let foundBook: string | undefined;

for(let book of books){
    if(book==='1983'){
        foundBook = book;
        break;
    }
}

// console.log(foundBook.length)   //1. What if foundBook isn't assigned (threre is no book 1983 in books array)? 

console.log(foundBook?.length)  //3. Than we add optional changing to foundBook variable (to call length function in case it is string)



//Objects and Function

let item1 = {title: "book", price: 30};
let item2 = {title: "pencil", price: 12};
let item3 = {title: "notebook"};

// let items: {title:string, price:number}[] = [item1,item2,item3]          //Error: in item3 object threre is no price property
//Solution - made price optional properties
let items: {title:string, price?:number}[] = [item1,item2,item3]


//Challenge1
//Create a new array of names
//Write a new function that checks if a name is in you array. This function should taka a name as a parameter and return a boolean.
//Use this function to check if various names are in your array and log the results

let names: string[] = ["John","Ann","Susan"];
function isNameInList(name:string, names:string[]):boolean{
    return names.includes(name)
}

console.log(isNameInList("Joha n",["John","Ann","Patrick"]))



//Challenge2
//Create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:
//-if the input is of type number, the function should multiply the number by 2 and log the result to the console.
//-it the input is of type string, the function should convert the string to uppercase and log the result to the console.

function processInput(x:(string | number)): void{
    if(typeof x === "number"){
        console.log(x*2)
    }else{
        console.log(x.toUpperCase())
    }
}

console.log(processInput(3))



//Challenge

function createStudent(student: {id: number; name: string}): void {
    console.log(`Welcome to the course ${student.name.toUpperCase()}!!!`)
}

const newStudent = {
    id:5,
    name:'anna',
    email:'anna@gmail.com'
}

createStudent(newStudent);
// createStudent({id:1, name:'bob', email:'bobo@gmail.com'});




//Challenge
//Your task is to create a function named processData that accepts two parameters:
//- The first parameter, input, should be a union type that can be either a string or a number.
//- The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false
//The function should behave as follwos:
//- If input is of type number, the function should return the square of the number
//- If input is of type string, the function should return the string in uppercase
//- If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

function processData(input:string|number, config:{reverse:boolean}={reverse:false}): string | number {
    if(typeof input === "number"){
        return input*input;
    }else{
        return config.reverse ? input.toUpperCase().split("").reverse().join("") : input.toUpperCase();
    }
}

console.log(processData(4))


//Challenge
//Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string)
//Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).
//Create a Union Type: Define a type Staff that is a union of Employee and Manager.
//Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

type Employee = {id: number, name: string, department: string};
type Manager = {id:number, name:string, employees: Employee[]};
type Staff = (Employee | Manager);
function printStaffDetails(staff: Staff): void{
    if("employees" in staff){
        console.log(`The person ${staff.name} is a manager of ${staff.employees.length} employees`);
    }else{
        console.log(`The person ${staff.name} is a employee in ${staff.department}`)
    }
}

printStaffDetails({id:3,name:"Pera",employees:[{id:4,name:"Marko",department:"sssa"},{id:3,name:"Jova",department:"eee"}]})



//Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
//Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
//Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
//Use the ? after the sotrage property to indicate that this property is optional and may not exist on all objects of this type.
//Also inside the interface, define any methods that the object should have. In this case, we have upgraderam, which is a function that takes a number and returns a number.
//Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
//Finally, we can use our object. We can call its upgradeRam method to increase

interface Computer{
    readonly id:string,
    brand:string,
    ram:number,
    storage?:number,
    upgradeRam(increase:number):number,
};

const myComp:Computer = {
    id:"3",
    brand:"Gigatron",
    ram:16,
    storage:2,
    upgradeRam(amount:number){
       this.ram+=amount;
       return this.ram;
    }
}

console.log("myComp",myComp)
console.log("///");


//Challenge
//Define the Person interface Start by defining a Person interface with a name property of type string.
//Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
//Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
//Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less taht 0.33, return a Person. If it's less that 0.66, return a DogOwner. Otherwise, return a Manager.
//Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.

interface Person {
    name: string
}
interface DogOwner extends Person{
    dogName: string
}
interface Manager2 extends Person{
    managePeople: ()=>void,
    delegateTask: ()=>void
}

let person:Person = {name:"Pera"};
let dogOwner:DogOwner = {name:"Jova",dogName:"Dino"};
let manager2:Manager2 = {
    name:"Homer",
    managePeople: ()=>{},
    delegateTask: ()=>{}
}

function getEmployee(): Person|DogOwner|Manager2 {
    let randomNum: number = Math.random();
    if(randomNum<0.33){
        return person;
    }else if(randomNum <0.66){
        return dogOwner;
    }else{
        return manager2;
    }
}

console.log(getEmployee());



//

let personA:[string,number] = ['john',25];
// let personA:[string,number] = [234,'john',25];
function getPerson():[string,number]{
    return ['john',25];
} 
personA=['john',44];
console.log("asfsd",personA)


let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);




//Challenge
//Define an enum names UserRole with members Admin, Manager and Employee.
//Define a type alias named User with properties id (number), name (string), role (userRole), and contact (a tuple with two elements: email as string and phone as string)
//Define a function named createUser that takes a User object as its parameter and returns a User object
//Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.

enum UserRole {
    Admin,
    Manager,
    Employee
}

type User = {
    id: number,
    name: string,
    role: UserRole.Admin,
    contact: [string,string]
}

function createUser(user:User):User{
    return user;
}

const user:User = createUser({
    id:1, 
    name:'john doe', 
    role: UserRole.Admin, 
    contact:['john@gmail.com',"234-234-345"]
})
 


//Challenge - "Truthy"/"Falsy" guard
//In TypeScript, "Truthy"/"Falsy" guard is a simple check for a truthy or falsy value
//Define a function  named printLength that takes one parameter str which can be of type string, null, or undefined.
//Inside the function, use an if statement to check if str is truthy. In JavaScript and TypeScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e. except for false, 0, -0, 0n, "", null, undefined, and NaN).
//If str is truthy, it means it's a string (since null and undefined are falsy). In this case, log the length of str using the length propeerty of the string.
//If str is not truthy (i.e. it's either null or undefined), log the string 'No string provided'.
//Now you can call the printLength function with a string, null, or undefined as the argument. The function will print the length of the string if a string is provided, or 'No string provided' otherwise.

function printLength(str:string|null|undefined):void{
    if(str){
        console.log(str.length)
    }else{
        console.log("No string provided")
    }
}

printLength("null");


//Challenge
//Define function named checkInput that return string type of values and takes one parameter input, which can be of type string or Date. 
//Inside of function use if statement to check if input is type of Date or not. If input is type of Date return fullYear as string, otherwise return input

function checkInput(input:string|Date):string{
    if(input instanceof Date){
        return input.getFullYear().toString();
    }
    return input;
}

console.log(checkInput("03-23-1999"))
console.log(checkInput(new Date("03/23/1999")))



//Challenge
//Create User and Student types. 
//- User has name (string), and study method (no arguments, return nothing)
//- Student has name (string), and login method (no arguments, return nothing)
//Create type Person - union of Student and User
//Create randomPerson function that randomly return User or Student object

type User2 = {
    name:string,
    login: ()=>void
}
type Student = {
    name:string,
    study: ()=>void
}
type Person2 = User2 | Student;

const randomPerson2 = ():Person2 => {
    if(Math.random()>0.5){
        return {name:"Pera",study:()=>{console.log('Studying')}};
    }else{
        return {name:"Mare", login:()=>{console.log('Logging in')}};
    }
}

console.log(randomPerson2())



//Challenge
//Create isStudent function that takes argument with Person type, and return boolean if Person is Student or User.
function isStudent(person: Person2):boolean{
    return "study" in person;   //we need to know some specific property or method for that custom type
}

const person33 = randomPerson2();
if(isStudent(person33)){
    (person33 as Student).study();
}else{
    (person33 as User2).login();
}

