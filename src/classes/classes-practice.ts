export class Person {
    public name: string;
    private age: number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }

    getAge():number{
        return this.age
    }
}


export class Vehicle {
    public type: string
    constructor(type:string){
        this.type = type;
    }
}

export class Car extends Vehicle {
    readonly model: string;
    public price: number;
    
    constructor(model:string, price:number){
        super("Car")
        this.model = model;
        this.price = price;
    }

    private changePrice(newPrice:number):void{
        this.price=newPrice
    }
}

class Employee extends Person {
    salary: number;
    constructor(salary:number, name:string, age:number){
        super(name, age);
        this.salary = salary
    }
}


