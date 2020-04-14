import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'varchar', name: 'name'})
  name: string;
}