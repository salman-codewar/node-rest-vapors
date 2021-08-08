import { Application } from 'express';
import { CommonRoutesConfig } from '../../common/routes.config';
import ValidateMiddleware from '../../common/validate.middleware';
import UserController from './controller';
import { CreateUserDto } from './dto';

export class UserRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, 'UserRoutes');
  }

  configureRoutes() {
    this.app.route('/users').post(ValidateMiddleware.validate(CreateUserDto), UserController.create);

    return this.app;
  }
}
