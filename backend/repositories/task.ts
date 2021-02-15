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
      .andWhere('userTask.userId=:id', { id: userId })
      .andWhere('userTask.status=:status', { status: 'draft' })
      .andWhere('task.startDate < :start_at', {
        start_at: new Date(new Date().setHours(0, 0, 0, 0)),
      })
      .andWhere('task.endDate > :date', { date: new Date(new Date().setHours(24, 0, 0, 0)) })
      .where('userTask.status=:status', { status: 'review' })
      .getManyAndCount();
  }

  async findArchivedUserTasks(userId: number, status: any): Promise<[Task[], number]> {
    return await this.createQueryBuilder('task')
      .innerJoinAndSelect('task.userTask', 'userTask')
      .leftJoinAndSelect('userTask.submission', 'submission')
      // Todo: Remove this from here
      .leftJoinAndSelect('submission.submissionAssets', 'submissionAssets')
      .where('userTask.userId=:id', { id: userId })
      .andWhere(`userTask.status in (:...status)`, { status })
      .getManyAndCount();
  }
}

export default TaskRepository;
