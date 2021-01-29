import { Task } from '../entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Task)
class TaskRepository extends Repository<Task> {
  async findById(req, taskId: number): Promise<Task> {
    return await this.createQueryBuilder('task')
      .innerJoinAndSelect('task.userTask', 'userTask')
      .leftJoinAndSelect('userTask.submission', 'submission')
      .where('id=:id', { id: taskId })
      .where('userTask.userId=:id', { id: req.user.id })
      .getOne();
  }

  async findByTaskId(req, taskId: number): Promise<Task> {
    return await this.createQueryBuilder('task')
      .innerJoinAndSelect('task.userTask', 'userTask')
      .leftJoinAndSelect('userTask.submission', 'submission')
      .where('userTask.taskId=:id', { id: taskId })
      .where('userTask.userId=:id', { id: req.user.id })
      .getOne();
  }

  async findUserTasks(req): Promise<Task[]> {
    return await this.createQueryBuilder('task')
      .innerJoinAndSelect('task.userTask', 'userTask')
      .leftJoinAndSelect('userTask.submission', 'submission')
      .where('userTask.userId=:id', { id: req.user.id })
      .getMany();
  }
}

export default TaskRepository;
