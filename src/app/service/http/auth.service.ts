import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/entity/User';
import { HttpRoutes } from '../../util/enums/HttpRoutes';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpRoute = HttpRoutes.USER;

  constructor(private http: HttpClient) {}

  auth(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.httpRoute + 'auth', user, {
      responseType: 'json',
      observe: 'response',
    });
  }
}
