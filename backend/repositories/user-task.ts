import { UserTask, Submission } from '../entity';
import { EntityManager, EntityRepository, getRepository, Repository, Transaction } from 'typeorm';
import { object } from 'joi';
import UserRepository from './user';
@EntityRepository(UserTask)
class UserTaskRepository extends Repository<UserTask> {
  findByUserId(id: number) {
    return this.findOne({ where: { userId: id } });
  }

  findByTaskId(id: number) {
    return this.findOne({ where: { taskId: id }, relations: ['task', 'submission'] });
  }

  findAllUserTasks(id: number) {
    return this.find({
      where: {
        taskId: id,
        status: 'review',
      },
      relations: ['submission'],
    });
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

  saveSubmissionStatus(userTask: UserTask) {
    return this.manager.transaction(async (entityManager: EntityManager) => {
      const userTaskRepository = entityManager.getCustomRepository(UserTaskRepository);
      const userRepository = entityManager.getCustomRepository(UserRepository);
      if (userTask.status === 'accepted') {
        userRepository.updatePoints(userTask.assignedPoints, userTask.userId);
        userTaskRepository.save(userTask);
      } else {
        userTaskRepository.save(userTask);
      }
      return userTask;
    });
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
