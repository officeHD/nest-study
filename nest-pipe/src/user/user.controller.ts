import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import {UserDTO} from './dto/user.dto';
import { ValidationPipe } from 'src/shared/pipe/validation.pipe';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('info')
  @UsePipes(ValidationPipe)
  createUser(@Body() userdto: UserDTO){
    return userdto;
  }
}
