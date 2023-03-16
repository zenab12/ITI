import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { courseSchema } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(@InjectModel("Courses") private courseModel){}
 async create(createCourseDto: CreateCourseDto) {
    let newCourse = new this.courseModel(createCourseDto);
    await newCourse.save()
    return newCourse;
  }

  findAll() {
    return this.courseModel.find({}).exec();
  }

  async findOne(id: ObjectId) {
    let foundedCourse = await this.courseModel.findById(id);
    return foundedCourse;
  }

  async update(id: ObjectId, updateCourseDto: UpdateCourseDto) {
  await this.courseModel.findOneAndUpdate({_id:id},updateCourseDto);
    return `This action updates a #${id} course`;
  }

  async remove(id: ObjectId) {
  await this.courseModel.remove({_id:id});
  return `This action removes a #${id} course`;
  }
}
