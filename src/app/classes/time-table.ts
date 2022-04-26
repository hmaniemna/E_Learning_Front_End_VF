
import { Group } from "./group";
import {Course} from "./course"
export class TimeTable {
    
    idTable !: number;
    hourS !: number;
    hourE !: number;
    lessonLevel!: number;
    Monday!:Course;
    Tuesday!:Course;
    Wednesday!:Course;
    Thirsday!:Course;
    Friday!:Course;
    course !: Course;
    group !:Group;
}
