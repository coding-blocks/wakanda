import * as path from 'path';
import { Router } from 'express';

export interface Route {
  path: string;
  children?: Route[];
}

export const createRouter = (routerMap: Route, importPath: string, router: Router = Router()) => {
  const handlerPath: string = path.join(importPath, routerMap.path);
  const handler: Router = require(handlerPath).default;

  router.use('/' + routerMap.path, handler);

  routerMap.children?.forEach((child) => createRouter(child, handlerPath, handler));

  return router;
};
