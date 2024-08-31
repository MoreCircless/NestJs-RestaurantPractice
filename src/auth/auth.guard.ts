import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwt_secret } from './constants';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/decorators/roles.decorator';
import { Role } from '@prisma/client';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.getJWT(request);
    if (!token) {
      throw new UnauthorizedException('No token found');
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwt_secret,
      });
      request['user'] = payload;

      
      const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      // Si esta seteada la condicion, entonces verifico que en el array de requiredRole este presente el del JWT, sino es erroneo
      if (requiredRoles && !requiredRoles.includes(payload.role)) {
        throw new ForbiddenException('You do not have the required role');
      }

    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
    return true;
  }

  private getJWT(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
