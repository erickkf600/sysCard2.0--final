import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment as env } from '@app/env';
import { LoggerService } from '../../logger';
import { HttpError } from '../../exception';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private loggerService: LoggerService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(error => this.errorHandler(error))
    );
  }

  // Customize the default error handler here if needed
  private errorHandler(error: HttpErrorResponse): Observable<HttpEvent<HttpError>> {
    if (!env.production) {
      // Do something with the error
    }

    // Capture 5xx status http requests
    if (error.status.toString().match('^5[0-9]{2}$')) {
      this.loggerService.captureException(new Error(error.message), {
        tags: {
          error: error.error,
          name: error.name,
          status: error.status
        }
      });
    }

    if (!error || error.status === 0) {

      return throwError({
        message: 'Erro de conexão com a API',
        status: 0,
        type: 'unknown',
        statusText: error.statusText
      });
    }
    if (!error || error.status === 401) {

      return throwError({
        message: 'Usuário não encontrado',
        status: 401,
        type: 'Unauthorized',
        statusText: error.statusText
      });
    }

    return throwError({
      ok: error.ok,
      message: error.message,
      status: error.status,
      statusText: error.statusText
    });
  }

}
