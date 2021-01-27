import { Connection, getConnection } from 'typeorm';
import UserRepository from './user';
import UserTaskRepository from './user-task';

export class Repositories {
  private connection: Connection;

  constructor(name = 'default') {
    this.connection = getConnection(name);
  }

  get user(): UserRepository {
    return this.connection.getCustomRepository(UserRepository);
  }
  get userTask(): UserTaskRepository {
    return this.connection.getCustomRepository(UserTaskRepository);
  }
  static getInstance(): Repositories {
    return new Repositories();
  }
}
