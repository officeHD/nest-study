import { IsNotIn, MinLength } from 'class-validator';
export class UserDTO{
  /* 
  * 账号名称
  */
  @IsNotIn([''],{message: '账号名称不能为空'})
  username: string;

  /* 
  * 密码
  */
  @MinLength(6,{
    message: '密码长度不能小于6位数'
  })
  password: string;
}