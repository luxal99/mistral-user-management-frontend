import { Injectable, Query } from "@angular/core";
import { HttpRoutes } from "../../util/enums/HttpRoutes";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { User } from "../../models/entity/User";
import { Observable } from "rxjs";
import { makeQueryParams } from "../../util/functions/make-query-params";
import { UserQuery } from "../../util/query/UserQuery";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private httpRoute = HttpRoutes.USER;

  constructor(private http: HttpClient) {
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(this.httpRoute, user);
  }

  getUsers(query: UserQuery): Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(this.httpRoute, {
      responseType: "json",
      observe: "response",
      params: makeQueryParams(query)
    });
  }
}
