import { SubmissionStatus } from 'entity/user-task';
import { Request, Response } from 'express';
import { Repositories } from '../../../repositories/index';

class SubmissionController {
  async handleDraft(req: Request, res: Response) {
    const payload = req.body.data;
    const taskId: any = req.body.scope.id;
    const userId: any = req.user.id;
    const submission = await Repositories.getInstance().submission.saveWithAssets(payload);

    const userTask = await Repositories.getInstance().userTask.findByTaskId(Number(taskId));
    userTask.submission = submission;
    await Repositories.getInstance().userTask.save(userTask);

    res.json(await Repositories.getInstance().task.findById(userId, taskId));
  }

  async handleSubmission(req: Request, res: Response) {
    const status = req.body.status;
    const id = req.params.id;

    const userTask = await Repositories.getInstance().userTask.findById(Number(id));
    userTask.status = status;
    await Repositories.getInstance().userTask.save(userTask);

    res.json(await Repositories.getInstance().userTask.findById(Number(id)));
  }
}

export default new SubmissionController();
