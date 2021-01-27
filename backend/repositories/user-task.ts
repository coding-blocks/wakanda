import { UserTask } from '../entity/user-task';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(UserTask)
class UserTaskRepository extends Repository<UserTask> {
  findByUserId(id: number) {
    return this.findOne({ where: { userId: id } });
  }

  findByTaskId(id: number) {
    return this.findOne({ where: { taskId: id } });
  }

  async findById(id: number): Promise<UserTask> {
    const userTask = await this.findOne(id, {
      relations: ['task', 'submission'],
    });
    if (!userTask) throw new Error('ERR_USER_TASK_NOT_FOUND');
    return userTask;
  }

  async findAll(): Promise<UserTask[]> {
    // TODO: handle pagination
    return await this.find();
  }
}

export default UserTaskRepository;
