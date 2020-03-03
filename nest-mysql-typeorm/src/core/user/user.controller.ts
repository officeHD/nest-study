import { Controller, Get, Post,Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserAddDTO } from './dto/user.add.dto';
import { User } from '../../entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('list')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('add')
  add(@Body() user: UserAddDTO){
    return this.userService.addUser(user);
  }
}
