import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  // 自增主键
  @PrimaryGeneratedColumn()
  id: Number

  // 唯一标识
  uid: Number

  // 账号
  @Column({
    type: 'varchar',
    name: 'account',
    nullable: true
  })
  account: String;

  // 密码
  @Column({
    type: 'varchar',
    name: 'password',
    nullable: true
  })
  password: String;

  // 姓名
  @Column({
    nullable: true,
    type: 'varchar',
    name: 'name'
  })
  name: String;

  // 年龄
  @Column({
    nullable: true,
    type: 'int'
  })
  age: Number

  // 身份证号
  @Column({
    nullable: true,
    type: 'varchar',
    name: 'idCard'
  })
  idCard: String

  // 手机号
  @Column({
    nullable: true,
    type: 'varchar',
    name: 'phone'
  })
  phone: Number
}