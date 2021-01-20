import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('foobar');
});

export default router;
