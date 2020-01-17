import { createParamDecorator } from '@nestjs/common';

/* 
 * 获取当前body参数中的某个参数值
 */

export const User = createParamDecorator((data: string, req) => {
  return data ? req.user[data] : req.user;
});