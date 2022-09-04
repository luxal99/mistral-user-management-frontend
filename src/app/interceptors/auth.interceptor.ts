import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ACCESS_TOKEN_LC,
  AUTHORIZATION_HEADER,
} from '../util/constant/constant';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(ACCESS_TOKEN_LC);
    if (token) {
      const cloned = request.clone({
        headers: request.headers.set(AUTHORIZATION_HEADER, token),
      });
      return next.handle(cloned);
    }

    return next.handle(request);
  }
}
