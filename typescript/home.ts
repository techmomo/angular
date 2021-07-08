import { FirstModule } from "./firstmodule";
console.log('Home');
// data types
// number
// string
// boolean
// complex
// arrays


var i:number = 10;
var j:number= 11;

console.log(i + j);


var nums:number[] = [1, 2, 4, 5];

nums.forEach(n=> console.log(n));


interface User {
    userId:number,
    userName:string
}


let u:User= {
    userId: 1,
    userName: 'user 1'
}

let usrs:User[];

usrs= [
    {
        userName: 'user 1',
        userId: 1
    },
    {
        userName: 'user 2',
        userId: 2
    }
];

usrs.forEach(u=>console.log(u.userId +" --- "+ u.userName ));

interface Project{
    id:number,
    pCode?:string,
    pName:string,
    getName:()=>void
}


const google:Project = {
    id: 1,
    pName: 'Google Inc',
    getName: ()=>{
        console.log("P name Project Namee");
    }
}

google.getName();


interface Parent {
    sayHello: ()=>void
}

class A implements Parent {
    id:number
    index:string

    // initialise 
    constructor(id:number,index:string){
        console.log('A ()');
        this.id = id
        this.index = index
    }
    sayHello():void{
        console.log('say Hello');
    }
}


// create object

let aa:A = new A(1,"1010");
console.log(aa.id);
aa.sayHello();


let fModule:FirstModule = new FirstModule();
fModule.getServiceInfo();




/****
 * 
 *                  STEPS TO FOLLOW FOR TYPESCRIPT
 * 
 * Step1 : Install Node js - https://nodejs.org/en/download/
 * Step2 : Install typescript - run this command for that : npm i -g typescript
 * Step3 : create a ts file - e.g. index.ts
 * Step4 : COmpile the ts file - tsc index.ts
 * Step5 : review the compiled / generated js file
 * Step6 : run the js file - node index.js
 * Step7 : install angular cli 
 * Step8 : ng -version
 * Step9 : create a new angular application - 
 * Step10: ng new hello-angular
 * Step11: ng serve // to run the angular application
 * Step12: create a custom component
 * Step13: ng g c components/home
 */















