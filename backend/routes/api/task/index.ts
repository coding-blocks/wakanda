import { Request, Response, Router } from 'express';
import { isAdmin } from '../../../middlewares/authentication';
import controller from './controller';

const router = Router();

router.get('/', controller.handleActiveTasks);
router.get('/tasks', isAdmin, controller.handleAllTasks);
router.get('/:id', controller.handleGetCurrent);

export default router;
