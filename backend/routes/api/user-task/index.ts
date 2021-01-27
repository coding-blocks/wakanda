import { Request, Response, Router } from 'express';
import { isAuthenticated } from '../../../middlewares/authentication';
import controller from './controller';

const router = Router();

router.get('/active-tasks', isAuthenticated, controller.handleActiveTasks);

router.get('/', controller.handleGetAll);
router.get('/:id', controller.handleGetCurrent);
router.put('/:id/draft', controller.handleUpdateDraft);

export default router;
