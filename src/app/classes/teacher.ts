import { Course } from "./course";
import { Group } from "./group";

export class Teacher {
    idT!:number;
    fullName!:String;
    emailId!:String;
    password!:String;
    accessCode!:number;
    course !: Course;
    group!:Group;
}
