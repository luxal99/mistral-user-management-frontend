import { Injectable } from '@angular/core';
import { HttpRoutes } from '../../util/enums/HttpRoutes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Permission } from '../../models/entity/Permission';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  private httpRoute = HttpRoutes.PERMISSIONS;
  constructor(private http: HttpClient) {}

  getPermissions(): Observable<Permission[]> {
    return this.http.get<Permission[]>(this.httpRoute);
  }
}
