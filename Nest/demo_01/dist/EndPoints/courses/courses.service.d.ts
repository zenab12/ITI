import { Course } from './courses.model';
export declare class CoursesService {
    create(crs: Course): Course;
    findAll(): Course[];
    findOne(id: number): Course;
    update(id: number, crs: Course): string;
    remove(id: number): string;
}
