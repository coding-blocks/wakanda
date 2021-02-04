import { Request, Response, Router } from 'express';
import { ce } from '../../../utils/app';
import controller from './controller';
import policies from './policies';
import validator from './validator';

const router = Router();

router.post('/', validator.POST, ce(controller.handleCreateSubmission));
router.get('/:id', ce(controller.handleQueryById));
router.patch('/:id', ce(policies.updateById), ce(controller.handleUpdateById));
router.post('/:id/status', validator.SUBMIT, ce(controller.handleUpdateSubmissionStatus));

export default router;
