"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path_1 = require("path");
const fs = require("fs");
let data;
getStaticFile();
let students = [];
function getStaticFile() {
    const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), 'Data/data.json'));
    console.log("**");
    file.on("data", (stream) => {
        data = JSON.parse(stream.toString());
    });
}
function write(d) {
    fs.open((0, path_1.join)(process.cwd(), 'Data/data.json'), 'w', (err, fd) => {
        if (err)
            throw err;
        fs.appendFile(fd, JSON.stringify(d), 'utf8', (err) => {
            fs.close(fd, (err) => {
                if (err)
                    throw err;
            });
            if (err)
                throw err;
        });
    });
}
let StudentsService = class StudentsService {
    create(std) {
        data[0]["Students"].push(std);
        write(data);
        return std;
    }
    findAll() {
        return data[0]["Students"];
    }
    findOne(id) {
        let foundStd = data[0]["Students"].find(item => +item.id == +id);
        return foundStd;
    }
    update(id, std) {
        let foundStd = data[0]["Students"].find(item => +item.id == +id);
        let editableStd = Object.assign(Object.assign({}, foundStd), std);
        let restStudents = data[0]["Students"].filter(item => +item.id !== +id);
        data[0]["Students"] = [];
        write(data);
        restStudents.push(editableStd);
        console.log(data[0]["students"]);
        console.log(restStudents);
        data[0]["Students"].push(...restStudents);
        write(data);
        return `student with id #${id} updated successfully`;
    }
    remove(id) {
        let restStudents = data[0]["Students"].filter(item => +item.id !== +id);
        data[0]["Students"] = restStudents;
        write(data);
        return `student with id #${id} deleted successfully`;
        ;
    }
};
StudentsService = __decorate([
    (0, common_1.Injectable)()
], StudentsService);
exports.StudentsService = StudentsService;
//# sourceMappingURL=students.service.js.map