import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import { ILike, Like } from 'typeorm';
import AsyncHandler from '../../../decorators/async-handler';
import { generatePaginationObject } from '../../../utils/pagination';
import { Request as CARequest } from '../../../entity';

class WorkshopController {
  @AsyncHandler()
  async handleCreate(req: Request, res: Response) {
    const caRequest = new CARequest();
    Repositories.caRequest.merge(caRequest, req.body);
    const currentUser = await Repositories.user.findById(req.user.id);
    caRequest.user = currentUser;
    await Repositories.caRequest.save(caRequest);
    res.json('ok');
  }

  @AsyncHandler()
  async handleUpdateById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const payload = req.body.data;

    const caRequest = await Repositories.caRequest.updateCARole(payload, id);
    res.json({
      data: caRequest,
    });
  }

  @AsyncHandler()
  async handleGetRequests(req: Request, res: Response) {
    const query = req.query.q || '';
    const offset = Number(req.query.offset || 0);
    const limit = Number(req.query.limit || 10);
    const [workshops, count] = await Repositories.caRequest.findAndCount({
      where: [
        {
          name: ILike(`%${query}%`),
          isApproved: false,
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
