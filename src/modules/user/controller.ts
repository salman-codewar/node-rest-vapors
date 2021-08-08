import { Request, Response } from 'express';
import setupLogger from '../../config/logger';
import UserService from './service';

const logger = setupLogger('UserController');

class UserController {
  async create(req: Request, res: Response) {
    UserService.createUser(req.body);
    return res.status(200).json({});
  }
}

export default new UserController();
