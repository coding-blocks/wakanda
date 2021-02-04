import { NextFunction, Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import { ApiError } from '../../../base/errors/api-error';

class SubmissionPolicy {
  async updateById(req: Request, res: Response, next: NextFunction) {
    const userTask = await Repositories.userTask.findBySubmissionId(Number(req.params.id));
    if (userTask.userId !== req.user.id) {
      throw new ApiError(
        {
          title: 'Unauthorized',
          detail: 'You are not authorized to edit this.',
        },
        403,
      );
    } else if (userTask.status !== 'draft') {
      throw new ApiError(
        {
          title: 'Unauthorized',
          detail: 'You are not authorized to edit this, your task is in review.',
        },
        403,
      );
    }
    return next();
  }
}

export default new SubmissionPolicy();
