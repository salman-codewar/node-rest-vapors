import { Application } from 'express';
import { CommonRoutesConfig } from '../common/routes.config';
import { UserRoutes } from '../modules/user/routes';

const configureRoutes = (app: Application): Array<CommonRoutesConfig> => {
  const routes: Array<CommonRoutesConfig> = [];
  routes.push(new UserRoutes(app));
  return routes;
};

export default configureRoutes;
