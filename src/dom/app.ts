class ProjectInput{
   //Class has a few properties
   //- templateElement - contains "project-input" template
   //- hostElement - contains "form-control" template
   //- import node in document that contains contain of template
   //Create element property that contains first element of imported node
   //call private method attach

   //method attach - this method insert adjacent element on hostElement after begin. Element which we insert is class property element.

    templateElement: HTMLTemplateElement;
    hostElement: HTMLTemplateElement;
    element: HTMLFormElement; 
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor(){
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLTemplateElement;
        const importedNode = document.importNode(this.templateElement.content, true)
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInputElement = this.element.querySelector("#title") as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector("#description") as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector("#people") as HTMLInputElement
        
        this.configure();
        this.attach();
    }

    private attach(){
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }
    private configure(){
        this.element.addEventListener('submit', this.submitHandler.bind(this))
    }
    private gatherUserInput():[string,string,number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        if(
            enteredTitle.trim().length === 0 ||
            enteredDescription.trim().length === 0 ||
            enteredPeople.trim().length === 0
        ){
            alert('Invalid input, please try again!')
            return
        }else {
            return [enteredTitle, enteredDescription, +enteredPeople]
        }
    }
    private submitHandler(event: Event){
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if(Array.isArray(userInput)){
            const [title,desc,people] = userInput;
            console.log(title, desc, people)
        }
    }
}


const project = new ProjectInput()