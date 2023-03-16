import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { courseSchema } from './entities/course.entity';

@Module({
  imports:[
    MongooseModule.forFeature([{name:"Courses",schema:courseSchema}])
  ],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {

}
