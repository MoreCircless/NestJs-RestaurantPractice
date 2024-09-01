import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  lastName: string;

  @IsEmail()
  @IsString()
  @MinLength(1)
  email: string;

  @MinLength(8)
  password: string;

  @IsOptional()
  @IsString()
  role?: Role;
}
