import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly prisma : PrismaService,
        private jwtService: JwtService
    ){}

    async login(email : String, password : String)  {

         const user = await this.prisma.user.findFirst(
            {
                where: { email : email.toString()}
            })

        if(!user){
                throw new UnauthorizedException("Credentials Invalid!");
        }

        const passwordMatches = await bcrypt.compare(password.toString(), (await user).password.toString()); 
        
        if(!passwordMatches){
            throw new UnauthorizedException("Credentials are not valid!");
        }

        const payload = { sub: (await user).name, email: (await user).email, role: user.role };
        return {
        token: await this.jwtService.signAsync(payload),
        };


    }


}
