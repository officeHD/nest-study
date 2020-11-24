import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  // 使用InjectRepository装饰器并引入Repository这样就可以使用typeorm的操作了
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  // 获取所有用户数据列表(userRepository.query()方法属于typeoram)
  async findAll(): Promise<User[]> {
    let getsql = 'select * from user';
    return await this.userRepository.query(getsql);
  }

  // 新增用户
  async addOne(rUser): Promise<String> {
    let addsql = `INSERT INTO user(name,age,account,password) 
    values("${rUser.name}",${rUser.age},"${rUser.account}",${rUser.password})`;
    let list = await this.userRepository.query(addsql);
    if (list) {
      return '新增成功!';
    } else {
      return '新增失败!';
    }
  }

  // 修改用户
  async updateOne(uUser): Promise<String> {
    let upsql = `UPDATE user SET 
    name = "${uUser.name}",age = "${uUser.age}",account = "${uUser.account}", password = "${uUser.password}"
    WHERE id = "${uUser.id}"`;
    let list = await this.userRepository.query(upsql);
    if (list) {
      return '修改成功!';
    } else {
      return '修改失败!';
    }
  }

  // 删除用户
  async delOne(query): Promise<String> {
    let dsql = `DELETE FROM user WHERE id = ${query.id}`;
    let list = await this.userRepository.query(dsql);
    if (list) {
      return '删除成功!';
    } else {
      return '删除失败!';
    }
  }
}
