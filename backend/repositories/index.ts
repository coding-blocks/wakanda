import { Connection, getConnection } from 'typeorm';
import UserRepository from './user';
import TaskRepository from './task';
import SubmissionRepository from './submission';
import UserTaskRepository from './user-task';

export class Repositories {
  private connection: Connection;

  constructor(name = 'default') {
    this.connection = getConnection(name);
  }

  get user(): UserRepository {
    return this.connection.getCustomRepository(UserRepository);
  }
  get task(): TaskRepository {
    return this.connection.getCustomRepository(TaskRepository);
  }

  get userTask(): UserTaskRepository {
    return this.connection.getCustomRepository(UserTaskRepository);
  }

  get submission(): SubmissionRepository {
    return this.connection.getCustomRepository(SubmissionRepository);
  }

  static getInstance(): Repositories {
    return new Repositories();
  }
}
