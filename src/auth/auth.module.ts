import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { jwt_secret } from './constants';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports : [JwtModule.register({
    global: true,
    secret: jwt_secret,
    signOptions: { expiresIn: '900s' },
  })],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  exports : [AuthService]
})
export class AuthModule {}
