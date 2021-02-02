import { Request, Response, Router } from 'express';
import { ce } from '../../../utils/app';
import { isAuthenticated } from '../../../middlewares/authentication';
import controller from './controller';
import validator from './validator';

const router = Router();

router.use(isAuthenticated);
router.post('/', validator.POST, ce(controller.handleCreateSubmission));
router.get('/:id', ce(controller.handleQueryById));
router.patch('/:id', ce(controller.handleUpdateById));
router.post('/:id/status', validator.SUBMIT, ce(controller.handleUpdateSubmissionStatus));

export default router;
