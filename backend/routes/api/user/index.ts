import { Request, Response, Router } from 'express';
import { ce } from '../../../utils/app';
import { isAuthenticated } from '../../../middlewares/authentication';
import controller from './controller';

const router = Router();

router.get('/me', isAuthenticated, ce(controller.handleGetMe));

export default router;
