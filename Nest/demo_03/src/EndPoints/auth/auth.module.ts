import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './entities/auth.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[MongooseModule.forFeature([{name:"Authuntication",schema:AuthSchema}]),
  JwtModule.register({secret:'Zien_12',signOptions:{expiresIn:'1d'}})
],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
