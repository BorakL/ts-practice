export class Person {
    public name: string;
    private age: number;
    protected nickname: string;

    constructor(name:string, age:number, nickname:string){
        this.name=name;
        this.age=age;
        this.nickname=nickname
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

// class Employee extends Person {
//     salary: number;
//     constructor(salary:number, name:string, age:number){
//         super(name, age);
//         this.salary = salary
//     }
// }


