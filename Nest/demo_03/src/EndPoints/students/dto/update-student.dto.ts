import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {

    // constructor(public name,public age,public coursesID)
    // {
    //     super(name,age,coursesID);
    // }
}

