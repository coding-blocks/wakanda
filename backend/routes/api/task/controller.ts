import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';

class TaskController {
  async handleActiveTasks(req: Request, res: Response) {
    const userId = req.user.id;
    res.json({
      data: await Repositories.task.findUserTasks(userId),
    });
  }

  async handleGetCurrent(req: Request, res: Response) {
    const taskId = req.params.id;
    const userId = req.user.id;
    res.json(await Repositories.task.findById(userId, Number(taskId)));
  }
}

export default new TaskController();
