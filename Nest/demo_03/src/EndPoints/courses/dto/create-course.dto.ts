import { IsInt, IsNotEmpty, IsString, Length, Max, Min } from "class-validator"

export class CreateCourseDto {

    @IsNotEmpty()
    @IsString()
    @Length(3,20)
    name:string

    @IsNotEmpty()
    @IsString()
    @Length(3,40)
    description:string 

    @IsNotEmpty()
    @IsInt()
    @Min(50)
    @Max(100)
    score:number
}
