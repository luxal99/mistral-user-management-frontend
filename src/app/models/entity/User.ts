import { UserInfo } from './UserInfo';
import { Permission } from "./Permission";

export interface User {
  username: string | null;
  password?: string | null;
  idUserInfo?: UserInfo;
  permissions?: Permission[];
}
