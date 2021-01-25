import { Request, Response, Router } from 'express';
import { Repositories } from '../../repositories/index';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  res.json({
    data: await Repositories.getInstance().user.findAll(),
  });
});

export default router;
