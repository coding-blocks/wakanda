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
}

export default new TaskController();
