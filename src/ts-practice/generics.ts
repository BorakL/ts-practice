//Generics examples

//Identity Function:
function identity<T>(arg:T):T{
    return arg;
}

console.log(identity("asdf"));
console.log(identity([1,2,3]));


//Array manipulation:
function reverse<T>(array:T[]):T[]{
    return array.reverse();
}

console.log(reverse([2,32,13]));
console.log(reverse([2,"asdf",13]));
// console.log(reverse("sdf"));    //Argument of type 'string' is not assignable to parameter of type 'unknown[]'.ts(2345)


//Interface - create interface Person that contains two properties one name (string), and other age (number)
interface Person{
    name:string,
    age: number
}
const man1:Person = {
    name: "Peter",
    age: 33
}
console.log(man1);

//Generic interface - create interface that contains from two properties first and second
interface Pair<T,U>{
    first: T,
    second: U
}
const pairObj: Pair<number,number> = {
    first: 234,
    second: 33
}

//Interface - a Student interface that contains properties name, year, faculty
interface Student {
    name: string,
    year: Date,
    faculty: string
}
const student1: Student = {
    name: "Jova",
    year: new Date("2005"),
    faculty: "Economics"
}
console.log(student1)

const student2: Student = {
    name:"John",
    year: new Date("2004"),
    faculty: "Philosophy"
    // faculty: 3      //Type number is not assignable to type string 
    // x:44    //Property x does not exist in type Student
}

//Generic interface - create generic Student interface that contains follow properties: name, year and faculty
interface StudentG <N,Y> {
    name: N,
    year: Y,
    faculty: N
}

const student3: StudentG <string,Date> = {
    name: "John",
    year: new Date("2005"),
    faculty: "Math"
}

console.log(student2)





//Interface Animal
interface Animal {
    specie: string
}

//Interface Dog
interface Dog extends Animal {
    name: string,
    bark: ()=>string
}

const dog:Dog = {
    specie: "dog",
    name: "Max",
    bark: ()=>"Wow"
}

console.log(dog.bark())

///////// Generics

//Animal
interface AnimalG<T>{
    specie: T
}

interface DogG<T> extends AnimalG<T>{
    name: T,
    bark: ()=>T
}

const dog2:DogG<string> = {
    specie: "Dog",
    name: "Max",
    bark: ()=>"wow"
}


//Interface Cat
interface Cat extends Animal{
    name: string,
    maow: ()=>string
}

const cat:Cat = {
    specie: "Cat",
    name: "Cici",
    maow: ()=>"Mnjau"
}

//Interface Generic Cat
interface CatG<T> extends AnimalG<T>{
    name: T,
    maow: ()=>T
}

const cat2:CatG<string> = {
    specie: "cat",
    name: "Kitty",
    maow: ()=>"Maaaow"
}



/////////////////



function mapObject<T, U>(obj: Record<string, T>, mapper: (value: T) => U): Record<string, U> {
    let mappedObj: Record<string, U> = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            mappedObj[key] = mapper(obj[key]);
        }
    }
    return mappedObj;
}

let square = (x: number) => x * x;
let numbersObj = { a: 1, b: 2, c: 3 };
let squaredNumbersObj = mapObject(numbersObj, square);
console.log(squaredNumbersObj);  // Output: { a: 1, b: 4, c: 9 }