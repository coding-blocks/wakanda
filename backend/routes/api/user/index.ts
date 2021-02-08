import { Router } from 'express';
import { isAdmin, isAuthenticated } from '../../../middlewares/authentication';
import controller from './controller';

const router = Router();

router.get('/me', isAuthenticated, controller.handleGetMe);
router.get('/', isAuthenticated, isAdmin, controller.handleGetUsers);

export default router;
