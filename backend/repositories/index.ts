import { Connection, getConnection } from 'typeorm';
import { User } from '~/entity';
import UserRepository from './user';

export class Repositories {
  private connection: Connection;
  private constructor(name = 'default') {
    this.connection = getConnection(name);
  }
  get user(): UserRepository {
    return this.connection.getCustomRepository(UserRepository);
  }

  static getInstance(): Repositories {
    return new Repositories();
  }
}
