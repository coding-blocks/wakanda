import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';

class UserController {
  async handleGetMe(req: Request, res: Response) {
    res.json({
      data: await Repositories.user.findOne(req.user.id),
    });
  }
}

export default new UserController();
