import { IsEmail, IsString, MinLength } from "class-validator";


export class LoginDto {

    @IsEmail()
    @IsString()
    @MinLength(1)
    email : String;

    @IsString()
    password: String
}