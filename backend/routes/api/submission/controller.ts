import { BaseSerializer } from 'base/serializer';
import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';

class SubmissionController {
  async handleCreateSubmission(req: Request, res: Response) {
    const payload = req.body.data;
    const scope: any = req.body.scope;
    const userId: any = req.user.id;

    const userTask = await Repositories.userTask.createSubmissionForTask(scope.id, payload);

    res.json(await Repositories.submission.findById(userTask.submission.id));
  }

  async handleQueryById(req: Request, res: Response) {
    const id = req.params.id;

    const submission = await Repositories.submission.findOne(id, {
      relations: ['submissionAssets'],
    });

    res.json({
      data: submission,
    });
  }

  async handleUpdateById(req: Request, res: Response) {
    const id = req.params.id;
    const payload = req.body.data;
    console.log(id, payload);
    await Repositories.submission.update(
      {
        id: Number(id),
      },
      payload,
    );
    const submission = await Repositories.submission.findOne(id);

    res.json({
      data: submission,
    });
  }

  async handleUpdateSubmissionStatus(req: Request, res: Response) {
    const status = req.body.status;
    const id = req.params.id;

    const userTask = await Repositories.userTask.findById(Number(id));
    userTask.status = status;
    await Repositories.userTask.save(userTask);

    res.json(await Repositories.userTask.findById(Number(id)));
  }
}

export default new SubmissionController();
