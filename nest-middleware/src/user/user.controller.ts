import { Controller, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('info')
  createUser(@Request() req){
    console.log('进入后路由后的数据',req.body);
    return '';
  }
}
