import { UserInfo } from "./UserInfo";

export interface User {
  username: string | null;
  password?: string | null;
  idUserInfo?:UserInfo
}
