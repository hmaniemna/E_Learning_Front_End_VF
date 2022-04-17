
import { Group } from "./group";
import {Course} from "./course"
export class TimeTable {
    
    idTable !: number;
    day !: number;
    lessonNumber !: number;
    course !: Course;
    group !:Group;
}
