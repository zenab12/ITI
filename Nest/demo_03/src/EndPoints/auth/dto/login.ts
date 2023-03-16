import { IsEmail, IsInt, IsNotEmpty, IsPositive, IsString, IS_ENUM, Length, Matches, matches, Max, Min } from "class-validator";

export class Login {


    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNotEmpty()
    @IsString()
    password:string

}
