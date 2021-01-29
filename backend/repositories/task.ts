import { Task } from '../entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Task)
class TaskRepository extends Repository<Task> {
  async findById(userId: number, taskId: number): Promise<Task> {
    return await this.createQueryBuilder('task')
      .innerJoinAndSelect('task.userTask', 'userTask')
      .leftJoinAndSelect('userTask.submission', 'submission')
      .leftJoinAndSelect('submission.submissionAsset', 'submissionAssets')
      .where('id=:id', { id: taskId })
      .where('userTask.userId=:id', { id: userId })
      .getOne();
  }

  async findUserTasks(userId: number): Promise<Task[]> {
    return await this.createQueryBuilder('task')
      .innerJoinAndSelect('task.userTask', 'userTask')
      .leftJoinAndSelect('userTask.submission', 'submission')
      .where('userTask.userId=:id', { id: userId })
      .getMany();
  }
}

export default TaskRepository;
