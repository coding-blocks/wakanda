import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import AsyncHandler from '../../../decorators/async-handler';
import { ApiError } from '../../../base/errors/api-error';

class UserController {
  @AsyncHandler()
  async handleGetMe(req: Request, res: Response) {
    res.json({
      data: await Repositories.user.findOne(req.user.id),
    });
  }
}

export default new UserController();
