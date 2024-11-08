class Book{
    title: string;
    author: string;
    private checkout: boolean=true;
    constructor(title: string, author: string){
        this.title = title;
        this.author = author;
    }
    changeCheckOut(){
        this.checkout = false;
    }
}

const deepWork = new Book('Deep Work','Cal Newport');

deepWork.changeCheckOut()

console.log(deepWork); 