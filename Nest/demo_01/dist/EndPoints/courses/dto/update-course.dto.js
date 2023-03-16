"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCourseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_course_dto_1 = require("./create-course.dto");
class UpdateCourseDto extends (0, mapped_types_1.PartialType)(create_course_dto_1.CreateCourseDto) {
}
exports.UpdateCourseDto = UpdateCourseDto;
//# sourceMappingURL=update-course.dto.js.map