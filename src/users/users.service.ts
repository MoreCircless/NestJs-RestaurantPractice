import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { create } from 'domain';

@Injectable()
export class UsersService {

  constructor(private readonly prisma: PrismaService){}

  async register(createUserDto: CreateUserDto) {

    createUserDto.password = await bcrypt.hash(createUserDto.password, 12);
    try{
      return await this.prisma.user.create({data: createUserDto, select: {id: true, name: true, lastName: true, email: true}}); 
    }  
    catch(e){
      throw new InternalServerErrorException("User could not be created!");
    }
  }

  findAll() {
    return this.prisma.user.findMany({select: {id: true, name: true, lastName: true, email: true}});;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findFirst({where: {id: id}, select: {id: true, name: true, lastName: true, email: true}});
    if(!user){
      throw new NotFoundException("User not found!");
    }
   return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {

    try{
      return await this.prisma.user.update({where: {id: id}, data: updateUserDto, select: {id: true, name: true, lastName: true, email: true}});
    }
    catch(e){
      throw new InternalServerErrorException("User could not be updated!");
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.user.delete({ where: { id } , select: {id: true, name: true, lastName: true, email: true}});
    } catch (error) {
      throw new InternalServerErrorException('User could not be deleted!');
    }
  }
}
