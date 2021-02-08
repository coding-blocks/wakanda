import { Request, Response } from 'express';
import Repositories from '../../../repositories/index';
import AsyncHandler from '../../../decorators/async-handler';

class TaskController {
  @AsyncHandler()
  async handleCreate(req: Request, res: Response) {
    const payload = req.body;
    const userTask = await Repositories.userTask.save(payload);
    res.json({ data: userTask });
  }
}

export default new TaskController();
