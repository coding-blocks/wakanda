import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import { ILike, Not } from 'typeorm';
import AsyncHandler from '../../../decorators/async-handler';
import { generatePaginationObject } from '../../../utils/pagination';

class UserController {
  @AsyncHandler()
  async handleGetMe(req: Request, res: Response) {
    res.json({
      data: await Repositories.user.findOne(req.user.id),
    });
  }

  @AsyncHandler()
  async updateUserById(req: Request, res: Response) {
    const role = req.body.role;
    const userId = Number(req.params.id);
    await Repositories.user.updateRole(userId, role);
    res.json('ok');
  }

  @AsyncHandler()
  async handleGetUsers(req: Request, res: Response) {
    const query = req.query.q || '';
    const offset = Number(req.query.offset || 0);
    const limit = Number(req.query.limit || 10);
    const [tasks, count] = await Repositories.user.findAndCount({
      where: [
        {
          name: ILike(`%${query}%`),
          role: Not('admin'),
        },
        {
          email: ILike(`%${query}%`),
          role: Not('admin'),
        },
      ],
      take: limit,
      skip: offset,
    });
    res.json({
      data: tasks,
      meta: {
        pagination: generatePaginationObject(count, offset, limit),
      },
    });
  }
}

export default new UserController();
