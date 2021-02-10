import { Router } from 'express';
import { valid } from 'joi';
import { isAdmin } from '../../../middlewares/authentication';
import controller from './controller';
import validator from './validator';

const router = Router();

router.post('/', controller.handleCreate);
router.get('/', isAdmin, controller.handleGetWorkshop);

export default router;
