import { Request, Response } from 'express';
import { Repositories } from '../../../repositories/index';

class UserController {
  async handleGetMe(req: Request, res: Response) {
    res.json(await Repositories.getInstance().user.findOne(req.user.id));
  }

  async handleGetAll(req: Request, res: Response) {
    res.json(await Repositories.getInstance().user.findAll());
  }
}

export default new UserController();
