import {
  Controller,
  Post,
  Body
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserLoginDTO } from './dto/user.login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  loginIn(@Body() userlogindto: UserLoginDTO) {
    return userlogindto;
  }

}
