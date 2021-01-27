import { Request, Response } from 'express';
import { Repositories } from '../../../repositories/index';
import { SubmissionStatus } from '../../../entity/user-task';

class UserController {
  async handleActiveTasks(req: Request, res: Response) {
    res.json(
      await Repositories.getInstance().userTask.find({
        where: [
          { userId: req.user.id },
          { status: SubmissionStatus.DRAFT || SubmissionStatus.TO_REVIEW },
        ],
        relations: ['task'],
      }),
    );
  }

  async handleGetAll(req: Request, res: Response) {
    res.json(
      await Repositories.getInstance().userTask.find({
        where: {
          userId: req.user.id,
        },
        relations: ['task'],
      }),
    );
  }

  async handleGetCurrent(req: Request, res: Response) {
    const taskId = req.params.id;
    res.json(await Repositories.getInstance().userTask.findById(Number(taskId)));
  }

  async handleUpdateDraft(req: Request, res: Response) {
    const taskId = req.params.id;
    res.json(await Repositories.getInstance().userTask.findById(Number(taskId)));
  }
}

export default new UserController();
