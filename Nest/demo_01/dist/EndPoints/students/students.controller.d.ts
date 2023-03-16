import { StudentsService } from './students.service';
import { Student } from './students.model';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    create(allBody: Student): Student;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, std: Student): string;
    remove(id: string): string;
}
