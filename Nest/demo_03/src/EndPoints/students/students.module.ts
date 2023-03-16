import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './entities/student.entity';
import { courseSchema } from '../courses/entities/course.entity';

@Module({
  imports:[MongooseModule.forFeature([{ name:"Students", schema: StudentSchema }]),MongooseModule.forFeature([{ name:"Courses", schema: courseSchema }])],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
