import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './EndPoints/courses/courses.module';
import { StudentsModule } from './EndPoints/students/students.module';

@Module({
  imports: [
    StudentsModule,
    CoursesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
