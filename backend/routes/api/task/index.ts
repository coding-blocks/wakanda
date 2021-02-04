import { Request, Response, Router } from 'express';
import { isAdmin } from '../../../middlewares/authentication';
import { ce } from '../../../utils/app';
import controller from './controller';

const router = Router();

router.get('/', ce(controller.handleActiveTasks));
router.get('/tasks', isAdmin, ce(controller.handleAllTasks));
router.get('/:id', ce(controller.handleGetCurrent));

export default router;
