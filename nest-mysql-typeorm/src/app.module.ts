import { Module } from '@nestjs/common';

// 数据库连接
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

// 子模块加载
import { UserModule } from './user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      host: '121.40.79.168', // 数据库ip地址
      port: 3306, // 端口
      username: 'root', // 登录名
      password: 'root', // 密码
      database: 'test', // 数据库名称
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
      synchronize: true, // 定义数据库表结构与实体类字段同步(这里一旦数据库少了字段就会自动加入,根据需要来使用)
    }),
    UserModule
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {} // 建立连接
}
