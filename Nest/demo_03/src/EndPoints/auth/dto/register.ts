import { IsEmail, IsInt, IsNotEmpty, IsPositive, IsString, IS_ENUM, Length, Matches, matches, Max, Min } from "class-validator";

export class Register {
    @IsNotEmpty()
    @IsString()
    @Length(3,15)
    name:string

    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    @Min(18)
    @Max(22)
    age:number

    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNotEmpty()
    @IsString() 
    gender:string

    @IsNotEmpty()
    @IsString() 
    address:string
 
    @IsNotEmpty()
    @IsString()
    @Length(8,12)
    @Matches(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z]*[a-z]*[a-z]).{8}$/,{message:"paswword should contain Capital and small letters ,  and should contain one of special letters and numbers"})
    password:string

}
