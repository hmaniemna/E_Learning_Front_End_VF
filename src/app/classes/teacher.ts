import { Course } from "./course";


export class Teacher {
    idT!:number;
    fullName!:String;
    emailId!:String;
    password!:String;
    accessCode!:number;
    course !: Course;
    group!:Group;
}
