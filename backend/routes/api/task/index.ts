import { Router } from 'express';
import { isAdmin } from '../../../middlewares/authentication';
import controller from './controller';
import validator from './validator';

const router = Router();

router.get('/', isAdmin, controller.handleAllTasks);
router.get('/active', controller.handleActiveTasks);
router.get('/:id', validator.GETById, controller.handleGetCurrent);

router.post('/', isAdmin, validator.POST, controller.handleCreateTask);
router.patch('/:id', isAdmin, validator.GETById, validator.POST, controller.handleUpdateById);
router.delete('/:id', isAdmin, validator.GETById, validator.POST, controller.handleDeleteById);

export default router;
