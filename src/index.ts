import 'reflect-metadata';
import env from './config/env';
import setupLogger from './config/logger';
import configureExpress from './config/express';
import configureRoutes from './config/register.routes';
import createDBConnection from './config/db.connection';
const logger = setupLogger('app');

const initializeApp = async () => {
  const port = env.PORT || 5000;
  const app = configureExpress({
    logger
  });

  const connection = await createDBConnection();
  if (connection) {
    await configureRoutes(app);
    app.listen(port, () => {
      logger.info(`Server listening on port: ${port}`);
    });

    app.get('/', (req, res) => {
      res.send('Testing');
    });
  }
};

initializeApp().catch((error) => logger.error(error));
