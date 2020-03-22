/**
 * Abstract class for logger Service
 * A service tracking error and logging info
 * Tracking for easy fixes
 * Logging for improving the quality
 *
 * @author Luan Tran
 */
export class LoggerService {

  /**
   * capture exception to logging platform
   *
   * @param(Error) error
   * @param() context
   */
  captureException(error: Error, context: any) {
    console.log('error: ', error);
    console.log('context: ', context);
    console.log('\n');
  }

  /**
   * capture info to logging platform
   *
   * @param(string) message
   * @param() tags
   */
  captureInfo(message: string, tags: any) {
    console.log('message: ', message);
    console.log('tags: ', tags);
    console.log('\n');
  }

}
