import { Request, Response, Router } from 'express';
import { ce } from '../../../utils/app';
import controller from './controller';

const router = Router();

router.get('/', ce(controller.handleLeaderboard));

export default router;
