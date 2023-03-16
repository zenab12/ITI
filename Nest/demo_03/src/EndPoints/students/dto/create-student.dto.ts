import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, ObjectId } from 'mongoose';
import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsNumber,

} from 'class-validator';

export class CreateStudentDto {
    @IsNotEmpty({
      message: 'name field is required',
    })
    @IsString({
      message: 'name should be string',
    })
    @Length(3,20)
    name:string 
 
    @IsNotEmpty()
    @IsInt()
    @Min(20)
    @Max(40)
    age:number 

    coursesID:ObjectId[];
}


// @Schema()
// export class CreateStudentDto extends Document {
//     @Prop({
//         required: [true, 'name field must be defined'],
//         minlength:[3,'min length for name must be 3'],
//         // match:^[A-Za-z.-]+(\s*[A-Za-z.-]+)*$",
//       })
//       name:string 
//       @Prop({
//         required: [true, 'age field must be defined'],
//         MIN_VALUE:[20,'min age must be 20'],
//         MAX_VALUE:[40,'max age must be 40']
//       })
//       age:number 
// @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
// courseID:number[];
// }

// export const studentSchema = SchemaFactory.createForClass(CreateStudentDto);
