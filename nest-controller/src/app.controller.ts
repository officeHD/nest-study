import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Response,
  Body,
  Headers,
  Header,
  Request,
  HttpCode,
  HttpStatus
} from '@nestjs/common';
import {AppService} from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('userlist')
  getUserlist(): string{
    return '前端人员返回参数传递,直接获取所有数据列表';
  }

  @Get('userinfo')
  getUserinfo(@Query() query): string{
    console.log(query);
    return `传入过来的id内容为${query.id}`;
  }

  @Get(':param')
  getUserParams(@Param('param') param:string){
    return `传递的参数是${param}`;
  }

  @Post('userinfo')
  createUser(@Body() userdto,@Headers() Headers): string{
    console.log(userdto);
    console.log(Headers);
    return `传递过来的body内容是姓名：${userdto.name},年龄：${userdto.age}`;
  }
}
