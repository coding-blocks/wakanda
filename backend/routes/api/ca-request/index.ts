import { Router } from 'express';
import { isAdmin } from '../../../middlewares/authentication';
import controller from './controller';
import validator from './validator';

const router = Router();

router.post('/', controller.handleCreate);
router.patch('/:id', isAdmin, validator.UPDATE, controller.handleUpdateById);
router.get('/', isAdmin, controller.handleGetRequests);

export default router;
