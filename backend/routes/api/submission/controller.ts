import { BaseSerializer } from 'base/serializer';
import AsyncHandler from '../../../decorators/async-handler';
import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';

class SubmissionController {
  @AsyncHandler()
  async handleCreateSubmission(req: Request, res: Response) {
    const payload = req.body.data;
    const scope: any = req.body.scope;

    const userTask = await Repositories.userTask.createSubmissionForTask(scope.id, payload);

    res.json({
      data: await Repositories.submission.findById(userTask.submission.id),
    });
  }

  @AsyncHandler()
  async handleQueryById(req: Request, res: Response) {
    const id = req.params.id;

    const submission = await Repositories.submission.findOne(id, {
      relations: ['submissionAssets'],
    });

    res.json({
      data: submission,
    });
  }

  @AsyncHandler()
  async handleUpdateById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const payload = req.body.data;

    const submission = await Repositories.submission.findOne(id);
    Repositories.submission.merge(submission, payload);
    await Repositories.submission.save(submission);

    res.json({
      data: submission,
    });
  }

  @AsyncHandler()
  async handleUpdateSubmissionStatus(req: Request, res: Response) {
    const status = req.body.status;
    const id = req.params.id; // submissionId

    const userTask = await Repositories.userTask.findById(Number(id));
    userTask.status = status;
    await Repositories.userTask.save(userTask);

    // return submission
    res.json(await Repositories.userTask.findById(Number(id)));
  }
}

export default new SubmissionController();
