import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { CoursesService } from '../courses/courses.service';
let stdProjection = {
  // _id:false,
  __v: false
}
@Injectable()
export class StudentsService {
  constructor(@InjectModel("Students") private studentModel, @InjectModel("Courses") private courseModule) { }

  async create(std: CreateStudentDto) {

    let student = await new this.studentModel(std);
    return student.save();
  }

  findAll() {
    return this.studentModel.find({}, stdProjection).exec();
  }

  async findOne(id: ObjectId) {
    let foundStd = await this.studentModel.findById(id);
    console.log(foundStd);
    return `student with id #${id} is :  ${foundStd.name} and his/her age is : ${foundStd.age}`;
  }

  async findOneCourses(id: ObjectId) {

    let foundStd= await this.studentModel.findById(id)
    .populate("coursesID","",this.courseModule);

    let coursesNames = foundStd.coursesID.map(item=>item.name);
      
    return `student  courses is / are ${coursesNames} `;
  }

  async update(id: ObjectId, std: UpdateStudentDto) {
    await this.studentModel.findOneAndUpdate({ _id: id }, std);
    return `student with id #${id} updated successfully`;
  }

  async remove(id: ObjectId) {
    await this.studentModel.deleteOne({ _id: id });
    return `student with id #${id} deleted successfully`;
  }
}


