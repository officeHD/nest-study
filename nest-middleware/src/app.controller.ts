import { Controller, Get, Request} from '@nestjs/common';

@Controller('app')
export class AppController {

  @Get('list')
  getAppList(@Request() req){
    console.log('进入后路由后的数据',req.body);
    return '';
  }

}
