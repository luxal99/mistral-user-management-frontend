import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, filter, Observable, tap, throwError } from 'rxjs';
import { SnackbarService } from '../util/service/snackbar.service';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  constructor(private snackBarService: SnackbarService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let successMessage = '';
    if (request.method === 'POST' || request.method === 'PUT') {
      successMessage = 'Instance updated/created successfully';
    } else if (request.method === 'DELETE') {
      successMessage = 'Instance deleted successfully';
    } else {
      return next.handle(request);
    }

    return next.handle(request).pipe(
      filter((httpEvent) => httpEvent instanceof HttpResponse),
      tap((response) => {
        if (response instanceof HttpResponse && response.status === 200) {
          this.snackBarService.open(successMessage);
        }
        return next.handle(request);
      }),
      catchError((error: HttpErrorResponse) => {
        this.snackBarService.open(error.error.message);
        return throwError(error);
      })
    );
  }
}
