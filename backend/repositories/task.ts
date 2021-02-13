import { Task } from '../entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Task)
class TaskRepository extends Repository<Task> {
  async findById(userId: number, taskId: number): Promise<Task> {
    return await this.createQueryBuilder('task')
      .innerJoinAndSelect('task.userTask', 'userTask')
      .leftJoinAndSelect('userTask.submission', 'submission')
      .leftJoinAndSelect('submission.submissionAssets', 'submissionAssets')
      .where('id=:id', { id: taskId })
      .where('userTask.userId=:id', { id: userId })
      .getOne();
  }

  async findUserTasks(userId: number): Promise<[Task[], number]> {
    return await this.createQueryBuilder('task')
      .innerJoinAndSelect('task.userTask', 'userTask')
      .leftJoinAndSelect('userTask.submission', 'submission')
      // Todo: Remove this from here
      .leftJoinAndSelect('submission.submissionAssets', 'submissionAssets')
      .where('userTask.userId=:id', { id: userId })
      .where(`userTask.status in ('draft', 'review')`)
      // .where('task.startDate > :start_at', { start_at: new Date() })
      // .where('task.endDate < :date', { date: new Date() })
      .getManyAndCount();
  }
}

export default TaskRepository;
