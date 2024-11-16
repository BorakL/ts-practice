import { Car, Person } from "./classes/classes-practice";
import { Calculator, Manager, Person1 } from "./classes/classes-practice2";
import {Department} from "./classes/department";
import { add, describeLivingThing, employee1, getFullName, multiply, multiplyByTwo, welcomeUser } from "./ts-practice2/basics";

const accounting = new Department("accounting");

accounting.addEmployee('Max');
accounting.addEmployee('Manu')

// accounting.describe()

let person1 = new Person("Marko",44,"Mare");
console.log(person1.getAge()) 
// console.log(person1.nickname)

let car1 = new Car("Opel",22000);
// car1.changePrice(3000)
console.log(car1.price)


console.log(welcomeUser("John","Hello"))
console.log(add(3,4))
console.log(multiply(3,5))
console.log(multiplyByTwo(34))
console.log(getFullName("John"))
console.log(`${employee1.name} ${employee1.age} ${employee1.salary}`)
console.log(describeLivingThing({type:"animal",legs:4}))