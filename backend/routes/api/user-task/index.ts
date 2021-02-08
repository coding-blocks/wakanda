import { Router } from 'express';
import { isAdmin } from '../../../middlewares/authentication';
import controller from './controller';
import validator from './validator';

const router = Router();

router.post('/', validator.POST, controller.handleCreate);
router.get('/', validator.GET, controller.handleGetTasks);
router.delete('/', validator.DELETE, controller.handleDelete);

export default router;
