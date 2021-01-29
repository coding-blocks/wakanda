import { Request, Response } from 'express';
import { Repositories } from '../../../repositories/index';

class SubmissionController {
  async handleSubmission(req: Request, res: Response) {
    const payload = req.body.data;
    const taskId: any = req.body.scope.id;
    const submission = await Repositories.getInstance().submission.saveWithAssets(req, payload);

    const userTask = await Repositories.getInstance().userTask.findByTaskId(Number(taskId));
    userTask.submission = submission;
    res.json(await Repositories.getInstance().userTask.save(userTask));
  }
}

export default new SubmissionController();
