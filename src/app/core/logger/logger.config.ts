import { environment } from '@app/env';

/**
 * Logger configuration
 *
 * @enable enable logger service
 */
export interface LoggerConfiguration {
  enable: boolean;
}

export const loggerConfig: LoggerConfiguration = {
  enable: environment.enableLogger
};
