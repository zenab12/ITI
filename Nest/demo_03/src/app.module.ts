import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose"
import { StudentsModule } from './EndPoints/students/students.module';
import { CoursesModule } from './EndPoints/courses/courses.module';
import { AuthModule } from './EndPoints/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Zien:Zien1234@atlascluster.aokq6ht.mongodb.net/?retryWrites=true&w=majority'),
    StudentsModule,
    CoursesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
