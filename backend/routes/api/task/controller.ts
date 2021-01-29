import { Request, Response } from 'express';
import { Repositories } from '../../../repositories/index';

class TaskController {
  async handleActiveTasks(req: Request, res: Response) {
    res.json(await Repositories.getInstance().task.findUserTasks(req));
  }

  async handleGetCurrent(req: Request, res: Response) {
    const taskId = req.params.id;
    res.json(await Repositories.getInstance().task.findById(req, Number(taskId)));
  }
}

export default new TaskController();
