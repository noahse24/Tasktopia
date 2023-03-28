export class Todo{
    name: string;
    description: string;
    todoID: number;
    // Provisional Type
    finishDate: number;
    // Provisional Type
    addedModuleList: string;
    isDone: boolean;
    constructor(){
        this.name= "";
        this.description= "";
        this.todoID= 0;
        this.finishDate= 0;
        this.addedModuleList= "";
        this.isDone= false;
    }
}