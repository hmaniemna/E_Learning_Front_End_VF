import { Teacher } from "./teacher";
export class Course {
    idCourse !: number;
    title !: String;
    year !: number;
    startDate !: Date;
    endDate !: Date;
    teacher !: Teacher;
}
