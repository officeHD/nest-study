import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/* 全局自定义管道 */
import { ValidationPipe } from './shared/pipe/validation.pipe';
/* 全局异常过滤器 */
import { HttpExceptionFilter } from './shared/filters/http-exception.filter';
/* 全局中间件-解决xml支持问题 */
import { XMLMiddleware } from './shared/middleware/xml.middleware';
/* 全局守卫 - 验证用户登录权限 */
import { AuthGuard } from './shared/guard/auth.guard';
/* 全局响应拦截器 - 改变响应体结构 */
import { ResponseInterceptor } from './shared/interceptor/response.interceptor';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局注册通用验证管道ValidationPipe
  app.useGlobalPipes(new ValidationPipe());

  // 全局注册通用异常过滤器HttpExceptionFilter
  app.useGlobalFilters(new HttpExceptionFilter());

  // 全局注册xml支持中间件(这里必须调用.use才能够注册)
  app.use(new XMLMiddleware().use);

  // 全局注册权限验证守卫
  app.useGlobalGuards(new AuthGuard());

  // 全局注册响应拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(3002);
}
bootstrap();
