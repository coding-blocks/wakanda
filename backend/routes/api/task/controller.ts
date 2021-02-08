import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import AsyncHandler from '../../../decorators/async-handler';
import { ILike } from 'typeorm';

class TaskController {
  @AsyncHandler()
  async handleActiveTasks(req: Request, res: Response) {
    const userId = req.user.id;
    res.json({
      data: await Repositories.task.findUserTasks(userId),
    });
  }

  @AsyncHandler()
  async handleAllTasks(req: Request, res: Response) {
    const query = req.query.q || '';

    res.json({
      data: await Repositories.task.find({
        where: {
          name: ILike(`%${query}%`),
        },
      }),
    });
  }

  @AsyncHandler()
  async handleGetCurrent(req: Request, res: Response) {
    const taskId = req.params.id;
    const userId = req.user.id;

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
    Repositories.task.merge(task, payload);
    await Repositories.task.save(task);

    res.json({ data: task });
  }

  @AsyncHandler()
  async handleDeleteById(req: Request, res: Response) {
    const id = Number(req.params.id);

    await Repositories.task.delete(id);

    res.status(204);
  }
}

export default new TaskController();
