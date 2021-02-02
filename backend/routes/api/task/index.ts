import { Request, Response, Router } from 'express';
import { ce } from '../../../utils/app';
import { isAuthenticated } from '../../../middlewares/authentication';
import controller from './controller';

const router = Router();

router.get('/', isAuthenticated, ce(controller.handleActiveTasks));
router.get('/:id', ce(controller.handleGetCurrent));

export default router;
