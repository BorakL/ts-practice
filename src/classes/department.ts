export class Department {
    readonly name: string;
    public employees:string[] = [];

    constructor(n:string){
        this.name = n
    }

    describe() {
        console.log('Departnemt: '+this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    
    printEmploeeInformation(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

//private keyword služi da proglasi dati property privatnim, što znači da se on može koristiti direktno samo unutar klase, ne i unutar klasa koje ga nasleđuju. (znači možemo ga pozvati samo iz metoda njegove klase)
//protected radi isto što i private samo omogućava pristup metodu/propertiju i u klasama koje ga nasleđuju.
//readonly keyword služi da označi dati property readonly, što znači da se ne može menjati, samo se može čitati. 




//Inheritance

class ITDepartment extends Department {
    public admins:string[];
    constructor(id: string, admins:string[]){
        super(id);  //super() poziva konstruktor klase sa kojom se data klasa extenduje. Nakon toga možete koristiti sva svojstva i metode klase sa kojom se data klasa extenduje.
        this.admins = admins
    }
}

const accounting = new ITDepartment('d1',['Max'])


class AccountingDepartment extends Department {
    private lastReport: string;
    private reports: string[];
     
    constructor(id: string, reports:string[]){
        super(id);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name: string) {
        if(name==='Max'){
            return
        }
        this.employees.push(name)
    }
    addReport(text:string){
        this.reports.push(text)
    }

    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found')
    }
}