import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import { ILike, Like } from 'typeorm';
import AsyncHandler from '../../../decorators/async-handler';
import { generatePaginationObject } from '../../../utils/pagination';

class WorkshopController {
  @AsyncHandler()
  async handleCreate(req: Request, res: Response) {
    const workshop = req.body;
    await Repositories.workshop.save(workshop);
    res.json('ok');
  }

  @AsyncHandler()
  async handleGetWorkshop(req: Request, res: Response) {
    const query = req.query.q || '';
    const offset = Number(req.query.offset || 0);
    const limit = Number(req.query.limit || 10);
    const [workshops, count] = await Repositories.workshop.findAndCount({
      where: [
        {
          topic: ILike(`%${query}%`),
        },
      ],
      take: limit,
      skip: offset,
    });
    res.json({
      data: workshops,
      meta: {
        pagination: generatePaginationObject(count, offset, limit),
      },
    });
  }
}

export default new WorkshopController();
