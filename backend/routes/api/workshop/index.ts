import { Router } from 'express';
import { isAdmin } from '../../../middlewares/authentication';
import controller from './controller';
import validator from './validator';

const router = Router();

router.post('/', validator.POST, controller.handleCreate);
router.patch('/:id', isAdmin, controller.handleUpdateById);
router.get('/', isAdmin, controller.handleGetWorkshop);

export default router;
