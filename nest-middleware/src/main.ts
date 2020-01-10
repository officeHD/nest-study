import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 加载中间件
import { XMLMiddleware } from 'src/shared/middleware/xml.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 注册全局中间件
  app.use(new XMLMiddleware().use);
  await app.listen(3001);
}
bootstrap();
