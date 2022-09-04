import { Injectable, Query } from '@angular/core';
import { HttpRoutes } from '../../util/enums/HttpRoutes';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../../models/entity/User';
import { Observable } from 'rxjs';
import { makeQueryParams } from '../../util/functions/make-query-params';
import { UserQuery } from '../../util/query/UserQuery';
import { UserInfo } from '../../models/entity/UserInfo';
import { PermissionEnum } from '../../util/enums/PermissionEnum';
import { Permission } from '../../models/entity/Permission';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private httpRoute = HttpRoutes.USER;

  constructor(private http: HttpClient) {}

  save(user: User): Observable<User> {
    return this.http.post<User>(this.httpRoute, user);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(this.httpRoute + 'by-username', {
      params: { username },
    });
  }

  getUsers(query: UserQuery): Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(this.httpRoute, {
      responseType: 'json',
      observe: 'response',
      params: makeQueryParams(query),
    });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.httpRoute + id);
  }

  update(username: string, userInfo: UserInfo): Observable<any> {
    return this.http.put(this.httpRoute, userInfo, {
      params: { username },
    });
  }

  updatePermissions(
    username: string,
    permissions: Permission[]
  ): Observable<any> {
    return this.http.put(this.httpRoute + 'permissions', permissions, {
      params: { username },
    });
  }
}
