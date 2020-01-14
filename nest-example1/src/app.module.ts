import { Module } from '@nestjs/common';

// 子模块加载
import { UserModule } from './user/user.module'

@Module({
  imports: [
    UserModule
  ]
})
export class AppModule {}
