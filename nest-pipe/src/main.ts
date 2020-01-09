import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from 'src/shared/pipe/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局注册通用验证管道
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
