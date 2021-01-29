import { Request, Response, Router } from 'express';
import { isAuthenticated } from '../../../middlewares/authentication';
import controller from './controller';
import validator from './validator';

const router = Router();

router.post('/', validator.POST, controller.handleDraft);
router.post('/:id/status', validator.SUBMIT, controller.handleSubmission);

export default router;
