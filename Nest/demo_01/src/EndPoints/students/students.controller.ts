import { Controller, Get, Post, Body, Patch, Param, Delete, Header, Res } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './students.model';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() allBody: Student) {
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
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() std: Student) {
    return this.studentsService.update(+id, std);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }
}
