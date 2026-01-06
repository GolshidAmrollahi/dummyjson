import type { IResDto } from "../types/global.types";
import type { IUser } from "../types/user.type";
import { urls } from "../utils/urls";
import { generateClient } from "./client";

interface IGetUsersResDto extends IResDto {
  users: IUser[];
}
// interface IFetchUserListByIdsResDto extends IResDto { 
//   users: IUser[];
// }
type getUsersListType = () => Promise<IGetUsersResDto>;
export const getUsersList: getUsersListType = async  () => {
  const client = generateClient();
  const response = await client.get<IGetUsersResDto>(urls.users.list);
  return response.data;
}

type getUserByIdType = (_: number) => Promise<IUser>;
export const getUserById: getUserByIdType = async (id) => {
  const client = generateClient();
  const response = await client.get<IUser>(urls.users.byId(id));
  return response.data;
}

type getUsersListByIdsType = (_:Array<number>) => Promise<Array<IUser>>;
export const getUsersListByIds: getUsersListByIdsType = async (ids) => {
  const client = generateClient();
  const responses = await Promise.all(ids.map((id) => {
    return client.get<IUser>(urls.users.byId(id));
  }
))
const data: IUser[] = [];
for(const r of responses) {
  data.push(r.data);
}
 return data;
}