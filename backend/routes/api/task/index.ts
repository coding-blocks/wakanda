import { Request, Response, Router } from 'express';
import { isAuthenticated } from '../../../middlewares/authentication';
import controller from './controller';

const router = Router();

router.get('/', isAuthenticated, controller.handleActiveTasks);
router.get('/:id', controller.handleGetCurrent);

export default router;
