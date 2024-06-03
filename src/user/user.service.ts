import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectEntityManager()
  private entityManager: EntityManager;
  // 通过 email 查找用户
  async findUserByEmail(email: string) {
    return await this.entityManager.findOneBy(User, {
      email,
    });
  }
}
