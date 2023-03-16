"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_student_dto_1 = require("./create-student.dto");
class UpdateStudentDto extends (0, mapped_types_1.PartialType)(create_student_dto_1.CreateStudentDto) {
}
exports.UpdateStudentDto = UpdateStudentDto;
//# sourceMappingURL=update-student.dto.js.map