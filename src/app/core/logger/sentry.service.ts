import * as Sentry from '@sentry/browser';

import { LoggerService } from './logger.service';
import { defaultSentryConfig } from './sentry.config';
import { loggerConfig } from './logger.config';

/**
 * A logger service implement use Sentry.io
 *
 * @link https://sentry.io
 * @link https://docs.sentry.io/
 * @author Luan Tran
 */
export class SentryService extends LoggerService {

  constructor() {
    super();
    this.initSentry();
  }

  initSentry() {
    Sentry.init({
      dsn: defaultSentryConfig.dsn,
      environment: defaultSentryConfig.environment,
      enabled: loggerConfig.enable,
      release: defaultSentryConfig.release
    });
  }

  captureException(error: Error, context: any) {
    if (!loggerConfig.enable) {
      return;
    }

    Sentry.withScope(scope => {
      scope.setContext(error.message, {
        ...context,
        level: Sentry.Severity.Error
      });
      Sentry.captureException(error);
    });
  }

  captureInfo(message: string, tags: any) {
    if (!loggerConfig.enable) {
      return;
    }

    Sentry.captureEvent({
      message,
      tags,
      level: Sentry.Severity.Info
    });
  }

}
