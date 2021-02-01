import { Request, Response, Router } from 'express';
import { isAuthenticated } from '../../../middlewares/authentication';
import controller from './controller';
import validator from './validator';

const router = Router();

router.use(isAuthenticated);
router.post('/', validator.POST, controller.handleCreateSubmission);
router.post('/:id/status', validator.SUBMIT, controller.handleUpdateSubmissionStatus);

export default router;
