/* Create function that takes name (string) and year (number) as arguments and return string "name year"
    Create function that takes string as an argument and return number of characters
    Create function that takes string as an argument and return number of words
    Create function that takes two arguments text (string), and search (string). Find start index position for search criteria word inside text.
    Inside word "Hello World!" replace word "World" with word "Dolly", and convert both words to upper case
    Split some string into array by white spaces.
    You are given the string "Hello world".
    - Take a slice at index 6 and end slice 5 positions later.
    - Take a slice at index 6 and end go all the way to the end.
    create function that take an argument with any type of value. If it's string replace character at 3 position, if exists, with word "Hello". In case of number sum its value with 3. If its float echo 0.
 */
// Create function that takes name (string) and year (number) as arguments and return string "name year"
function foo1(name, year) {
    return "".concat(name, " ").concat(year);
}
// console.log(foo1("Pera",44))
// Create function that takes string as an argument and return number of characters
function foo2(text) {
    return text.length;
}
console.log(foo2("asdf"));
// Create function that takes two arguments text (string), and search (string). Find start index position for search criteria word inside text.
function foo3(text, search) {
    return text.search(search);
}
console.log(foo3("asdfasdf", "fa"));
// Inside word "Hello World!" replace word "World" with word "Dolly", and convert both words to upper case
function foo4(text, search, replace) {
    return text.replace(search, replace).toUpperCase();
}
console.log("foo4", foo4("Hello World!", "World", "Dolly"));
// Split some string into array by white spaces.
function foo5(text) {
    return text.split(" ");
}
console.log(foo5("Hi my name is Luke"));
// You are given the string "Hello world".
//     - Take a slice at index a and end slice b positions later.
function foo6(text, indexA, indexB) {
    return text.slice(indexA, indexB);
}
console.log(foo6("Hello World", 1, 5));
//     - Take a slice at index 6 and end go all the way to the end.
function foo6a(text, indexA) {
    return text.slice(indexA);
}
console.log(foo6a("Hello World", 5));
// create function that take an argument with any type of value. If it's string replace character at 3 position, if exists, with word "Hello". In case of number sum its value with 3. If its float echo 0.
// function foo7(arg:any){
//     if(typeof arg==="string"){
//         arg.replaceAt(3)
//     }
// } 
//String Manipulation:
//Write a function to count the number of characters in a string.
//Create a function to reverse a string.
//Implement a function to check if a string is a palindrome.
//Write a function to extract the first word from a sentence.
//Write a function to count the number of characters in a string.
function foo8(text) {
    return text.length;
}
console.log(foo8("asdf"));
//Create a function to reverse a string.
function foo9(text) {
    return text.split("").reverse().join("");
}
console.log(foo9("asdf"));
//Implement a function to check if a string is a palindrome.
function checkIsPalindrome(text) {
    return text.split("").reverse().join("") === text;
}
console.log("is palindrome", checkIsPalindrome("anaa"));
//Write a function to extract the first word from a sentence.
function extractFirstWord(text) {
    return text.split(" ")[0];
}
console.log(extractFirstWord("Hi my name is Luka"));
//Number Operations:
//Write a function to find the factorial of a number.
//Implement a function to check if a number is prime.
//Create a function to calculate the sum of digits of a number.
//Write a function to find the largest and smallest numbers in an array.
//Implement a function to generate Fibonacci series up to a given number of terms.
//Number Operations:
//Write a function to find the factorial of a number.
function factorial(num) {
    var f = 1;
    while (num) {
        f *= num;
        num--;
    }
    return f;
}
console.log(factorial(4));
//Implement a function to check if a number is prime.
function isNumPrime(num) {
    var i = 2;
    while (i < num / 2) {
        if (num % i === 0)
            return false;
        i++;
    }
    return true;
}
console.log("isNumPrime", isNumPrime(13));
//Create a function to calculate the sum of digits of a number.
function sumOfDigits(num) {
    return num.toString().split("").reduce(function (a, b) { return a + parseInt(b); }, 0);
}
//Write a function to find the largest and smallest numbers in an array.
function findLargestNum(num) {
    // let l=0;
    // num.forEach(n => {if(n>l)l=n} )
    // return l;
    // let sortedArray = num.sort((a,b)=>b-a)
    // return sortedArray[0]
    var largest = num[0];
    for (var i = 0; i < num.length; i++) {
        if (num[i] > largest) {
            largest = num[i];
        }
    }
    return largest;
}
console.log(findLargestNum([4, 3, 66, 5, 4]));
//Create array of numbers
//Create array "carsBrands" with a few car's brand (strings)
//Create array of string and numbers
//Change value at second position of array carsBrands
//Create array cars that contain a few associative arrays as elements. Let each array has the following keys: brand, model, year
//Loop through one car associative array
//Add a new array to the cars array
//Loop through all cars array
//Create associative array person with follow keys: firstName, lastName, age
//Changing firstName at array person
//Add new element with key gender with value "male"
//In array numbers add new numbers with values from 5 to 10
//remove element from numbers array with value 6
//remove elements from array numbers with value bigger than 6
//remove cars from cars array produced before 2000
//Create array of numbers
// let numbers:Array<number> = [1,2,3];
var numbers = [1, 2, 3];
//Create array "carsBrands" with a few car's brand (strings)
// let carsBrands: Array<string> = ["Mercedes","Opel","Fiat"];
var carsBrands = ["Mercedes", "Opel", "Fiat"];
//Create array of string and numbers
// let strnum: Array<any> = ["asdf",234];
var strnum = ["asdf", 345];
//Change value at second position of array carsBrands
carsBrands[1] = "Reno";
//Create array cars that contain a few associative arrays as elements. Let each array has the following keys: brand, model, year
var cars = [
    { brand: "Mercedes", model: "C200", year: 1999 },
    { brand: "BMW", model: "5", year: 2002 }
];
var cars2 = [
    { brand: "Mercedes", model: "C200", year: 1999 },
    { brand: "BMW", model: "5", year: 2002 }
];
console.log("cars", cars2);
//Loop through one car associative array
for (var car in cars[0]) {
    console.log(cars[0][car]);
}
//Add a new array to the cars array
cars.push({ brand: "Opel", model: "Corsa", year: 2004 });
//Loop through all cars array
// for(const car in cars){
//     console.log("car",cars[car])
// }
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    console.log("car", car);
}
//Create associative array person with follow keys: firstName, lastName, age
var personObj = { firstName: "string", lastName: "string", age: "number" };
//Changing firstName at array person
//Add new element with key gender with value "male"
//In array numbers add new numbers with values from 5 to 10
//remove element from numbers array with value 6
//remove elements from array numbers with value bigger than 6
//remove cars from cars array produced before 2000
