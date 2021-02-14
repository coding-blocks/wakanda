import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import AsyncHandler from '../../../decorators/async-handler';
import { ILike } from 'typeorm';
import { generatePaginationObject } from '../../../utils/pagination';

class TaskController {
  @AsyncHandler()
  async handleActiveTasks(req: Request, res: Response) {
    const userId = req.user.id;
    const offset = Number(req.query.offset || 0);
    const limit = Number(req.query.limit || 10);

    const [tasks, count] = await Repositories.task.findUserTasks(userId);

    res.json({
      data: tasks,
      meta: {
        pagination: generatePaginationObject(count, offset, limit),
      },
    });
  }

  @AsyncHandler()
  async handleAllTasks(req: Request, res: Response) {
    const query = req.query.q || '';
    const offset = Number(req.query.offset || 0);
    const limit = Number(req.query.limit || 10);
    const [tasks, count] = await Repositories.task.findAndCount({
      where: {
        name: ILike(`%${query}%`),
      },
      order: { updatedAt: 'DESC' },
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

  @AsyncHandler()
  async handleGetCurrent(req: Request, res: Response) {
    const taskId = req.params.id;
    const userId = req.user.id;

    if (req.user.role === 'admin') {
      return res.json({
        data: await Repositories.task.findOne(taskId),
      });
    }

    res.json({
      data: await Repositories.task.findById(userId, Number(taskId)),
    });
  }

  @AsyncHandler()
  async handleCreateTask(req: Request, res: Response) {
    const payload = req.body;
    const task = await Repositories.task.save(payload);
    res.json({ data: task });
  }

  @AsyncHandler()
  async handleUpdateById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const payload = req.body.data;

    const task = await Repositories.task.findOne(id);

    res.json({ data: Repositories.task.merge(task, payload) });
  }

  @AsyncHandler()
  async handleDeleteById(req: Request, res: Response) {
    const id = Number(req.params.id);

    await Repositories.task.delete(id);

    res.status(204);
  }
}

export default new TaskController();
