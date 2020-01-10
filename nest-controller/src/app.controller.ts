import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Headers,
  Request
} from '@nestjs/common';
import { AppService } from './app.service';
const parseString = require('xml2js').parseString;

@Controller('app')
export class AppController {
  constructor(
    private readonly appService: AppService
  ) { }

  @Get('userlist')
  getUserlist(): string {
    return '获取所有列表数据';
  }

  @Get('userinfo')
  getUserinfo(@Query() query): string {
    let jsQuery = JSON.stringify(query);
    return `获取Query数据,传递过来的Query内容是${jsQuery}`;
  }

  @Post('userinfo')
  createUser(@Body() user): string {
    let jsUser = JSON.stringify(user);
    return `获取Body数据,传递过来的Body内容是：${jsUser}`;
  }

  @Post('userheader')
  getUserHeader(@Headers() headers): string {
    let jsHeaders = JSON.stringify(headers);
    return `获取Headers数据,传递过来的Headers内容是：${jsHeaders}`;
  }

  @Post('userxml')
  getUserXML(@Request() req): string {
    req.on('data', req => {
      parseString(req,function(err,result){
        console.log(result);
      })
    })
    return '';
  }

  @Get(':param')
  getUserParams(@Param('param') param: string) {
    return `获取Param数据，传递过来的动态参数是${param}`;
  }
}
