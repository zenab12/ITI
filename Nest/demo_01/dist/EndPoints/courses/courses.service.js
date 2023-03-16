"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
let courses = [];
let CoursesService = class CoursesService {
    create(crs) {
        courses.push(crs);
        return crs;
    }
    findAll() {
        return courses;
    }
    findOne(id) {
        let foundedCrs = courses.find(item => +item.id == +id);
        console.log(foundedCrs);
        return foundedCrs;
    }
    update(id, crs) {
        let foundedCrs = courses.find(item => +item.id == +id);
        let restCourses = courses.filter(item => +item.id !== +id);
        courses = restCourses;
        let editableCrs = Object.assign(Object.assign({}, foundedCrs), crs);
        courses.push(editableCrs);
        return `course with id #${id} updated successfully`;
    }
    remove(id) {
        let restCourses = courses.filter(item => +item.id !== +id);
        console.log(restCourses);
        courses = restCourses;
        return `course with id #${id} deleted successfully`;
        ;
    }
};
CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map