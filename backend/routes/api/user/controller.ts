import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import { ILike, Like } from 'typeorm';
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
    const query = req.query.q || '';

    res.json({
      data: await Repositories.user.find({
        where: [
          {
            name: ILike(`%${query}%`),
          },
          {
            email: ILike(`%${query}%`),
          },
        ],
      }),
    });
  }
}

export default new UserController();
