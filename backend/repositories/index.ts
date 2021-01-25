import { Connection, getConnection } from 'typeorm';
import UserRepository from './user';

export class Repositories {
  private connection: Connection;

  constructor(name = 'default') {
    this.connection = getConnection(name);
  }

  get user(): UserRepository {
    return this.connection.getCustomRepository(UserRepository);
  }

  static getInstance(): Repositories {
    return new Repositories();
  }
}
