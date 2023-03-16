import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Res } from '@nestjs/common';
import { Response } from 'express';
import { PassThrough } from 'stream';
import { AuthService } from './auth.service';
import { Login } from './dto/login';
import { Register } from './dto/register';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(ValidationPipe)
  @Post("Register")
  Register(@Body() createAuthDto: Register) {
    return this.authService.Register(createAuthDto);
  }

  @UsePipes(ValidationPipe)
  @Post("Login")
  Login(@Body() createAuthDto: Login, @Res({passthrough:true}) response:Response) {
    return this.authService.Login(createAuthDto,response);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
