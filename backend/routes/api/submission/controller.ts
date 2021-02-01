import { BaseSerializer } from 'base/serializer';
import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';

class SubmissionController {
  async handleDraft(req: Request, res: Response) {
    const payload = req.body.data;
    const scope: any = req.body.scope;
    const userId: any = req.user.id;
    const submission = await Repositories.submission.saveWithAssets(payload);

    const userTask = await Repositories.userTask.findByTaskId(Number(scope.id));
    userTask.submission = submission;
    userTask.status = scope.status;
    await Repositories.userTask.save(userTask);
    res.json(await Repositories.submission.findById(submission.id));
  }

  async handleSubmission(req: Request, res: Response) {
    const status = req.body.status;
    const id = req.params.id;

    const userTask = await Repositories.userTask.findById(Number(id));
    userTask.status = status;
    await Repositories.userTask.save(userTask);

    res.json(await Repositories.userTask.findById(Number(id)));
  }
}

export default new SubmissionController();
