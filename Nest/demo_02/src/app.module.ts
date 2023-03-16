import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'

// import { CoursesModule } from './EndPoints/courses/courses.module';
import { StudentsModule } from './EndPoints/students/students.module';
import { CoursesModule } from './EndPoints/courses/courses.module';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb+srv://Zien:Zien1234@atlascluster.aokq6ht.mongodb.net/?retryWrites=true&w=majority'),
    StudentsModule,
    CoursesModule
    // CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
