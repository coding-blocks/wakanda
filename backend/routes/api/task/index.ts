import { Router } from 'express';
import { isAdmin } from '../../../middlewares/authentication';
import controller from './controller';
import validator from './validator';

const router = Router();

router.get('/', controller.handleActiveTasks);
router.get('/:id', controller.handleGetCurrent);

router.get('/tasks', isAdmin, controller.handleAllTasks);
router.post('/', isAdmin, validator.POST, controller.handleCreateTask);
router.patch('/id', isAdmin, validator.POST, controller.handleUpdateById);
router.delete('/id', isAdmin, validator.POST, controller.handleDeleteById);

export default router;
