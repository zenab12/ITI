import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {StreamableFile, Res } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';
import { Student } from './students.model';
const fs = require("fs");
let data:any;
getStaticFile();
// let students:Student[]=[];
let students:Student[]=[];

function getStaticFile() {
  const file = createReadStream(join(process.cwd(), 'Data/data.json'));
  console.log("**");
  file.on("data",(stream)=>{
     data = JSON.parse(stream.toString());
  });
} 

function write(d) {
  fs.open(join(process.cwd(), 'Data/data.json'), 'w', (err, fd) => {
    if (err) throw err;
    fs.appendFile(fd, JSON.stringify(d), 'utf8', (err) => {
      fs.close(fd, (err) => {
        if (err) throw err;
      });
      if (err) throw err;
    });
  });
}

@Injectable()
export class StudentsService {

  create(std:Student) {
    data[0]["Students"].push(std);
    write(data);
    return std;
    // students.push(std);
  }

  findAll() {
    return data[0]["Students"];
    // return students;
  }

  findOne(id: number) {
    let foundStd = data[0]["Students"].find(item=>+item.id == +id);
    return foundStd;
  }

  update(id: number, std: Student) {
    let foundStd = data[0]["Students"].find(item=>+item.id == +id);
    let editableStd = {...foundStd,...std};
    let restStudents =  data[0]["Students"].filter(item=>+item.id !== +id);
    data[0]["Students"] = [];
    write(data);
    restStudents.push(editableStd);
    console.log(data[0]["students"]);
    console.log(restStudents);
    data[0]["Students"].push(...restStudents);
    write(data);
    return `student with id #${id} updated successfully`;
  }

  remove(id: number) {
    let restStudents =  data[0]["Students"].filter(item=>+item.id !== +id);
    data[0]["Students"]= restStudents;
    write(data);
    return  `student with id #${id} deleted successfully`;;
  }
}


