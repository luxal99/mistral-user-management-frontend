import { Pipe, PipeTransform } from '@angular/core';
import { Permission } from '../../../../models/entity/Permission';

@Pipe({
  name: 'formatPermissions',
})
export class FormatPermissionsPipe implements PipeTransform {
  transform(permissions: Permission[]): string {
    if (!permissions) {
      return '';
    }
    if (permissions.length === 0) {
      return 'No permissions';
    }

    return permissions
      .map((permission) => permission.permissionName)
      .map((permissionName) => permissionName.split('_').join(' '))
      .toString()
      .split(',')
      .map(
        (permission) =>
          permission[0].toUpperCase() +
          permission.toLowerCase().substring(1, permission.length)
      )
      .toString();
  }
}
