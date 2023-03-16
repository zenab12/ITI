import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Login } from './dto/login';
import { Register } from './dto/register';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from "bcrypt";
import {JwtService} from "@nestjs/jwt"
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(@InjectModel("Authuntication") private Auth,
  private Jwtservice:JwtService
  ){}

async findUserByEmail(user){
  let foundedUsr = await this.Auth.findOne({email:user.email});
  return foundedUsr;
}
 async Register(createAuthDto: Register) {
    
   // check if email exist 
   let foundUser = await this.findUserByEmail(createAuthDto);
   if(foundUser)return {message:"Email already exist sorry , try again with another one"};
   
   // hash password 

   let salt = await bcrypt.genSalt(15);
   let hashedPass = await bcrypt.hash(createAuthDto.password , salt);
   createAuthDto.password = hashedPass;

   //create user in db 

   let newUser = await new this.Auth(createAuthDto);
   newUser.save();
   return {message:"Added Successfully" , data:newUser};
  }

 async Login(createAuthDto: Login,res:Response) {
  
   // check if email exist 
   let foundUser = await this.findUserByEmail(createAuthDto);
   if(foundUser){
   console.log(foundUser);


   // compare password 
   let checkPass = await bcrypt.compare(createAuthDto.password,foundUser.password);

   if(checkPass)
   {
    let _jwt = await this.Jwtservice.signAsync({_id:foundUser._id},{secret:'Zien_12'});
    res.header("x_auth_token",_jwt);
    res.cookie('x-auth_cookie',_jwt,{httpOnly:true});
    return {message:"LogedIn Successfully",token:_jwt};  

   }else 
   {
    return {message:"Invalid Password"};
   }
   } 
   return {message:"Invalid Email"};
   
  }

   findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
