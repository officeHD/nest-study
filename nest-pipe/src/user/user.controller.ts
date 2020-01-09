import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import {UserDTO} from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('info')
  createUser(@Body() userdto: UserDTO){
    return userdto;
  }
}
