import { format, transports, createLogger, Logger } from 'winston';
import env from './env';
const { combine, timestamp, errors, label, printf, splat, colorize } = format;
// Handles pretty printing objects passed to logger rather than `[object Object]
// Does not handle string + object log message. To log this way, use %o, such as logger.info("some message %o", objectToPrint)
// Ref: https://github.com/winstonjs/winston/issues/1217
const customFormat = printf((info) => {
  if (typeof info.message === 'object') {
    info.message = JSON.stringify(info.message, null, 2);
  }
  return `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`;
});
const options = {
  combinedFile: {
    level: 'info',
    filename: 'logs/app.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  erorrFile: {
    level: 'error',
    filename: 'logs/error.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  },
  exceptions: {
    filename: 'logs/exceptions.log'
  }
};
// Accepts label to be prepended for logs produced by logger and returns logger
// Example:
// const logger = require('../config/logger')('userController');
// logger.info('some log')
const setupLogger = (sourceLabel: string): Logger => {
  const logger = createLogger({
    transports: [new transports.File(options.combinedFile), new transports.File(options.erorrFile)],
    format: combine(
      label({ label: sourceLabel }),
      colorize(),
      timestamp(),
      errors({ stack: true }),
      splat(),
      customFormat
    ),
    exitOnError: false,
    exceptionHandlers: new transports.File(options.exceptions)
  });
  if (env.isDev) {
    logger.add(
      new transports.Console({
        format: combine(
          label({ label: sourceLabel }),
          colorize(),
          timestamp(),
          errors({ stack: true }),
          splat(),
          customFormat
        )
      })
    );
  }
  return logger;
};
export default setupLogger;
