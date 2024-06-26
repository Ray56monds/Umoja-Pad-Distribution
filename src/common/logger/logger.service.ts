// src/common/logger/logger.service.ts
import { Injectable, LoggerService } from '@nestjs/common';
import { createLogger, format, transports } from 'winston';

@Injectable()
export class CustomLogger implements LoggerService {
  private readonly logger = createLogger({
    format: format.combine(
      format.timestamp(),
      format.printf(
        ({ timestamp, level, message }) =>
          `${timestamp} [${level}]: ${message}`,
      ),
    ),
    transports: [new transports.Console()],
  });

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace: string) {
    this.logger.error(`${message} - ${trace}`);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
