import { UserSortEnum } from "../../util/enums/UserSortEnum";

export interface UserSort {
  sortProperty: UserSortEnum,
  orderDirection: "ASC" | "DESC"
}
