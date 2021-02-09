import { Router } from 'express';
import { isAdmin } from '../../../middlewares/authentication';
import controller from './controller';

const router = Router();

router.get('/me', controller.handleGetMe);
router.get('/', isAdmin, controller.handleGetUsers);
router.patch('/:id', isAdmin, controller.updateUserById);

export default router;
