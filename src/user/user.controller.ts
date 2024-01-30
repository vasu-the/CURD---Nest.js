import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  async create(@Body() createUserDto: CreateUserDto) :Promise <User> {
    return this.userService.create(createUserDto);
  }

  @Get('get-all-user')
  async findAll():Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('get-By-Id/:id')
  async findOne(@Param('id') id: string):Promise <User> {
    return this.userService.findOne(id);
  }

  @Patch('update-By-Id/:id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) :Promise <User | null>{
    return this.userService.update(id, updateUserDto);
  }

  @Delete('delete-By-Id/:id')
  async remove(@Param('id') id: string):Promise <User | null> {
    return this.userService.delete(id);
  }

  @Delete('delete-all')
  async deleteAll(): Promise<{ success: boolean; deletedCount: number }> {
    return this.userService.deleteAll();

  }
}
