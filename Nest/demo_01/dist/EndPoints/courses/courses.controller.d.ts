import { Course } from './courses.model';
import { CoursesService } from './courses.service';
export declare class CoursesController {
    private readonly coursesService;
    constructor(coursesService: CoursesService);
    create(crs: Course): Course;
    findAll(): Course[];
    findOne(id: string): Course;
    update(id: string, crs: Course): string;
    remove(id: string): string;
}
