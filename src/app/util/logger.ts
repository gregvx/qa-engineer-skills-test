import * as winston from 'winston';

export class AppLogger {
  public static format(data: {
    message: string;
    level: string;
    metadata?: { [key: string]: any };
  }): string {
    if (data && data.message) {
      const stringData =
        data.metadata && JSON.stringify(data.metadata.metadata);
      const metadata =
        stringData && stringData !== '{}' ? ': ' + stringData : '';
      if (typeof (data.message as any) !== 'string') {
        data.message = data.message.toString
          ? data.message.toString()
          : `${data.message}`;
      }
      const message =
        data.message && data.message.replace(/\r?\n|\r/g, ' ').trim();
      return `${new Date().toISOString()} - ${
        data.level
      } - ${message}${metadata}`;
    } else {
      return `${new Date().toISOString()} - ` + JSON.stringify(data);
    }
  }

  public static write(message: string): void {
    logger.info(message);
  }
}

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.metadata(),
    winston.format.printf(AppLogger.format)
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.metadata(),
        winston.format.printf(AppLogger.format)
      ),
    }),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
