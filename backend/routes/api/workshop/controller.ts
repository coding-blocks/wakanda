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
  async handleUpdateById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const payload = req.body.data;

    const workshop = await Repositories.workshop.findOne(id);
    Repositories.workshop.merge(workshop, payload);
    await Repositories.workshop.save(workshop);

    res.json({
      data: workshop,
    });
  }

  @AsyncHandler()
  async handleGetWorkshop(req: Request, res: Response) {
    const query = req.query.q || '';
    const archived = req.query.archived || false;
    const offset = Number(req.query.offset || 0);
    const limit = Number(req.query.limit || 10);
    const [workshops, count] = await Repositories.workshop.findAndCount({
      where: [
        {
          topic: ILike(`%${query}%`),
          isDone: archived,
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
