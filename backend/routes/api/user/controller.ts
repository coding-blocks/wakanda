import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import { Like } from 'typeorm';
import AsyncHandler from '../../../decorators/async-handler';

class UserController {
  @AsyncHandler()
  async handleGetMe(req: Request, res: Response) {
    res.json({
      data: await Repositories.user.findOne(req.user.id),
    });
  }

  @AsyncHandler()
  async handleGetUsers(req: Request, res: Response) {
    const { name = '' } = req.query;
    res.json({
      data: await Repositories.user.find({
        name: Like(`%${name}%`),
      }),
    });
  }
}

export default new UserController();
