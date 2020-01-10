import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 子模块加载
import { UserModule } from './user/user.module'

@Module({
  imports: [
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
 
}
