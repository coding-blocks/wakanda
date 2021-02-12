import { Router } from 'express';
import { isAdmin } from '../../../middlewares/authentication';
import controller from './controller';
import validator from './validator';

const router = Router();

router.post('/', validator.POST, controller.handleCreate);
router.get('/', isAdmin, controller.handleGetWorkshop);

export default router;
