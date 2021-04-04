import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import AsyncHandler from '../../../decorators/async-handler';
import { generatePaginationObject } from '../../../utils/pagination';
import { In } from 'typeorm';

class TaskController {
  @AsyncHandler()
  async handleCreate(req: Request, res: Response) {
    const payload = req.body;
    const userTask = await Repositories.userTask.save(payload);
    res.json({ data: userTask });
  }

  @AsyncHandler()
  async handleDelete(req: Request, res: Response) {
    await Repositories.userTask.delete({
      taskId: req.body.taskId,
      userId: req.body.userId,
    });

    res.sendStatus(204);
  }

  @AsyncHandler()
  async handleGetTasks(req: Request, res: Response) {
    const offset = Number(req.query.offset || 0);
    const limit = Number(req.query.limit || 10);
    const query = req.query.q || '';
    const status = req.query.status || null;

    const id = Number(req.query.taskId);
    const [userTask, count] = await Repositories.userTask.findAndCount({
      where: (qb) => {
        qb.where({
          taskId: id,
          ...(status && {
            status: In((status as string).split(',')),
          }),
        }).andWhere(`("UserTask__user".name ilike :q OR "UserTask__user".email ilike :q)`, {
          q: `%${query}%`,
        });
      },
      take: limit,
      skip: offset,
      relations: ['submission', 'user', 'task'],
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
