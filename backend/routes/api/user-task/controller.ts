import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import AsyncHandler from '../../../decorators/async-handler';
import { generatePaginationObject } from '../../../utils/pagination';

class TaskController {
  @AsyncHandler()
  async handleCreate(req: Request, res: Response) {
    const payload = req.body;
    const userTask = await Repositories.userTask.save(payload);
    res.json({ data: userTask });
  }

  async handleGetTasks(req: Request, res: Response) {
    const offset = Number(req.query.offset || 0);
    const limit = Number(req.query.limit || 10);

    const id = Number(req.query.taskId);
    const [userTask, count] = await Repositories.userTask.findAndCount({
      where: {
        taskId: id,
        status: 'review',
      },
      relations: ['submission', 'user'],
    });
    res.json({
      data: userTask,
      meta: {
        pagination: generatePaginationObject(count, offset, limit),
      },
    });
  }
}

export default new TaskController();
