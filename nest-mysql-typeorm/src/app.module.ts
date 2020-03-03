import { Module } from '@nestjs/common';

// 数据库连接
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

// 子模块加载
import { UserModule } from './core/user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {} // 建立数据库连接
}
