import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';

/* 单表 */
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'varchar', name: 'age' })
  age: string;

  @Column({ type: 'varchar', name: 'account' })
  account: string;

  @Column({ type: 'varchar', name: 'password' })
  password: string;
}
