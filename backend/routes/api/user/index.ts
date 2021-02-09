import { Router } from 'express';
import { valid } from 'joi';
import { isAdmin } from '../../../middlewares/authentication';
import controller from './controller';
import validator from './validator';

const router = Router();

router.get('/me', controller.handleGetMe);
router.get('/', isAdmin, controller.handleGetUsers);
router.patch('/:id', isAdmin, validator.UPDATE, controller.updateUserById);

export default router;
