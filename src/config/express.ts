import express from 'express';
import path from 'path';
// import cors from 'cors';
import winston from 'winston';
import expressWinston from 'express-winston';

interface Props {
  logger: winston.Logger;
}

const configureExpress = ({ logger }: Props) => {
  const app = express();
  app.use(express.json()); // support json encoded bodies
  app.use(express.urlencoded({ extended: true })); // support encoded bodies
  // app.use(cors());
  app.use('/', express.static(path.join(__dirname, '../public')));
  app.use(expressWinston.logger({ winstonInstance: logger }));
  return app;
};
export default configureExpress;
