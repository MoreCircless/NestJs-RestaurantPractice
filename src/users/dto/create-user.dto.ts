import { IsString, IsEmail, MinLength, Min, IsNumber } from 'class-validator';

export class CreateUserDto {

    @IsString()
    name : string;

    @IsString()
    lastName : string;

    @IsEmail()
    @IsString()
    @MinLength(1)
    email : string;

    @MinLength(8)    
    password : string;
}