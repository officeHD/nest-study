import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';
import { UserAddDTO } from './dto/user.add.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  /* 获取所有列表数据 */
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  /* 添加数据 */
  async addUser(user: UserAddDTO){
    await this.userRepository.save(user);
    this.userRepository.save(user).then(res=>{
      console.log(res);
    })
    return '添加成功';
  }

}
