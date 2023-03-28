export class Project{
    name: string;
    description: string;
    projectID: number;
    // Provisional type
    addedModuleList: string;
    // Provisional Type
    toDoList: string;
    constructor(){
        this.name= "";
        this.description= "";
        this.projectID= 0;
        this.addedModuleList= "";
        this.toDoList= "";
    }
}