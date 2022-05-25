import { Teacher } from "./teacher";
export class Course {
    idCourse !: number;
    title !: String;
    year !: number;
<<<<<<< HEAD
idteacher!:number ;
    description!:String ;
    jour!:String;
    datestart!:String;
    dateend!:String;


=======
    startDate !: Date;
    endDate !: Date;
    teacher !: Teacher;
    idteacher!:number ;
    description!:String ; 
>>>>>>> 116689e03ada33e458e5ad4e79f427ce0e1aff95
}

