import { StatusEnum } from '../../util/enums/StatusEnum';

export interface UserInfo {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  status?: StatusEnum | null;
}
