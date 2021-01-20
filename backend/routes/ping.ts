import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('PONG');
});

export default router;
