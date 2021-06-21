import { Router } from 'express';
import controller from './controller';

const router = Router();
router.get('/monthly', controller.monthlyLeaderboard);
router.get('/:id', controller.filterLeaderboard);
router.get('/', controller.handleLeaderboard);

export default router;
