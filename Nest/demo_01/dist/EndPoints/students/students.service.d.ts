import { Student } from './students.model';
export declare class StudentsService {
    create(std: Student): Student;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, std: Student): string;
    remove(id: number): string;
}
