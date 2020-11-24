import { Controller, Get, Post, Delete, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('add')
  addOne(@Body() rUser): Promise<String> {
    return this.userService.addOne(rUser);
  }

  @Post('update')
  updateOne(@Body() uUser): Promise<String> {
    return this.userService.updateOne(uUser);
  }

  @Delete('del')
  delOne(@Query() query):  Promise<String> {
    return this.userService.delOne(query);
  }
}
