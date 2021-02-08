import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import AsyncHandler from '../../../decorators/async-handler';

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
    res.json({
      data: await Repositories.task.find(),
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
    console.log(payload);
    const task = await Repositories.task.create(payload);

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
