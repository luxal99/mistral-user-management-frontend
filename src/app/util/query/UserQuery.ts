import { UserSortEnum } from "../enums/UserSortEnum";

export interface UserQuery {
  page: number;
  search?: string;
  orderBy?: UserSortEnum;
  orderByDirection?: "ASC" | "DESC";
}
