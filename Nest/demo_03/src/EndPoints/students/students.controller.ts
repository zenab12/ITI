import { Controller, Get, Post, Body, Patch, Param, Delete, Header, Res, ValidationPipe, UsePipes } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ObjectId } from 'mongoose';
import { pipe } from 'rxjs';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() allBody: CreateStudentDto) {
    let std = allBody;
    console.log(allBody);
    return this.studentsService.create(std);
  }

  @Header('Content-Type', 'application/json')
  @Header('Content-Disposition', 'attachment; filename="data.json"')
  @Get()
  findAll() {
    return this.studentsService.findAll();
    // return this.studentsService.getStaticFile();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectId) {
    return this.studentsService.findOne(id);
  }

  @Get(':id/courses')
  findOneCourses(@Param("id") id:ObjectId)
  {
    return this.studentsService.findOneCourses(id);
  }

  @UsePipes(ValidationPipe)
  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() std: UpdateStudentDto) {
    return this.studentsService.update(id, std);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.studentsService.remove(id);
  }
}
