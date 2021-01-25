import { Router } from 'express';
import * as fs from 'fs';
import * as path from 'path';

export const getDirRouter = (dirname) => {
  const router = Router();

  fs.readdirSync(dirname)
    .filter((file) => !file.startsWith('index') && !/\.map$/.test(path.basename(file)))
    .forEach((file) => {
      router.use('/' + file.split('.')[0], require(path.join(dirname, file)).default);
    });

  return router;
};
