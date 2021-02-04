import { UserTask, Submission } from '../entity';
import { EntityManager, EntityRepository, getRepository, Repository, Transaction } from 'typeorm';
import { object } from 'joi';
@EntityRepository(UserTask)
class UserTaskRepository extends Repository<UserTask> {
  findByUserId(id: number) {
    return this.findOne({ where: { userId: id } });
  }

  findByTaskId(id: number) {
    return this.findOne({ where: { taskId: id }, relations: ['task', 'submission'] });
  }

  findBySubmissionId(id: number) {
    return this.findOne({
      where: {
        submission: {
          id,
        },
      },
      relations: ['task', 'submission'],
    });
  }

  async findById(id: number): Promise<UserTask> {
    const userTask = await this.findOne(id, {
      relations: ['task', 'submission'],
    });
    if (!userTask) throw new Error('ERR_USER_TASK_NOT_FOUND');
    return userTask;
  }

  createSubmissionForTask(id: number, submission: Submission) {
    return this.manager.transaction(async (entityManager: EntityManager) => {
      const submissionRepository = entityManager.getRepository(Submission);
      const userTaskRepository = entityManager.getCustomRepository(UserTaskRepository);

      const userSubmission = await submissionRepository.save({
        ...submission,
        submittedAt: new Date(),
      });
      const userTask = await userTaskRepository.findByTaskId(id);
      userTask.submission = userSubmission;

      await userTaskRepository.save(userTask);

      return userTask;
    });
  }
}

export default UserTaskRepository;
