import { Task } from '../entity';
import { EntityRepository, Repository } from 'typeorm';
import moment from 'moment';

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
      .where(
        `userTask.userId=:id AND ((userTask.status='review') OR (userTask.status='draft' AND task.startDate < :startdate AND task.endDate > :enddate))`,
        {
          id: userId,
          startdate: moment().toISOString(),
          enddate: moment().toISOString(),
        },
      )
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
