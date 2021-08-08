import { ClassType, transformAndValidate, transformAndValidateSync } from 'class-transformer-validator';
import { NextFunction, Request, Response } from 'express';

class ValidateMiddleware {
  validate<T extends object>(classType: ClassType<T>) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await transformAndValidate(classType, req.body);
        next();
      } catch (error) {
        res.status(400).send({ error });
      }
    };
  }
}
export default new ValidateMiddleware();
