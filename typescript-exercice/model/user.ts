export class User{
    firstName: string;
    lastName: string;
    userName: string;
    userID: number;
    emailAddress: string;
    password: string;
    // Provisional Type
    usedDevices: string;
    constructor(){
        this.firstName="";
        this.lastName="";
        this.userName="";
        this.userID=0;
        this.emailAddress="";
        this.password="";
        this.usedDevices="";
    }

}