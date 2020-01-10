import { Module, MiddlewareConsumer,NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 子模块加载
import { UserModule } from './user/user.module'

// 加载中间件
// import { XMLMiddleware } from 'src/shared/middleware/xml.middleware';

@Module({
  imports: [
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer){
//     consumer
//     .apply(XMLMiddleware)
//     .forRoutes('app')
//   }
// }
