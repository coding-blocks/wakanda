import { UserTask } from '../entity';
import { EntityRepository, Repository } from 'typeorm';
@EntityRepository(UserTask)
class UserTaskRepository extends Repository<UserTask> {
  findByUserId(id: number) {
    return this.findOne({ where: { userId: id } });
  }

  findByTaskId(id: number) {
    return this.findOne({ where: { taskId: id }, relations: ['task', 'submission'] });
  }

  async findById(id: number): Promise<UserTask> {
    const userTask = await this.findOne(id, {
      relations: ['task', 'submission'],
    });
    if (!userTask) throw new Error('ERR_USER_TASK_NOT_FOUND');
    return userTask;
  }
}

export default UserTaskRepository;
