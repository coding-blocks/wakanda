import { Router } from 'express';
import controller from './controller';
import policies from './policies';
import validator from './validator';

const router = Router();

router.post('/', validator.POST, controller.handleCreateSubmission);
router.get('/:id', policies.belongsToUser, controller.handleQueryById);
router.patch('/:id', policies.belongsToUser, policies.updateById, controller.handleUpdateById);
router.post(
  '/:id/status',
  validator.SUBMIT,
  policies.belongsToUser,
  controller.handleUpdateSubmissionStatus,
);

export default router;
