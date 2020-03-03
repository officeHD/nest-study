import { IsNotIn } from 'class-validator';
export class UserAddDTO{
  /* 唯一标识 */
  uid: string;

  // 账号
  account: String;

  // 密码
  password: String;

  /* 姓名 */
  @IsNotIn(['',undefined,null],{message: '姓名不能为空'})
  name: string;
 
  /* 年龄 */
  age: Number;

  /* 身份证号 */
  idCard: String

  /* 手机号 */
  phone: Number;
}