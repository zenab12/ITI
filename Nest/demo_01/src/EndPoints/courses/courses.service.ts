import { Injectable } from '@nestjs/common';
import { Course } from './courses.model';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

let courses:Course[]=[];

@Injectable()
export class CoursesService {
 
  create(crs:Course) {
    courses.push(crs);
    return crs;
  }

  findAll() {
    return courses;
  }

  findOne(id: number) {
    let foundedCrs = courses.find(item=>+item.id == +id);
    console.log(foundedCrs);
    return foundedCrs;
  }

  update(id: number, crs:Course) {
    let foundedCrs = courses.find(item=>+item.id == +id);
    let restCourses = courses.filter(item=>+item.id !== +id);
    courses=restCourses;
    let editableCrs = {...foundedCrs,...crs};
    courses.push(editableCrs);
    return `course with id #${id} updated successfully`;
  }

  remove(id: number) {
    let restCourses = courses.filter(item=>+item.id !== +id);
    console.log(restCourses);
    courses=restCourses;
    return  `course with id #${id} deleted successfully`;;
  }
}
