import type { IResDto } from "../types/global.types";
import type { IUser } from "../types/user.type";
import { urls } from "../utils/utl";
import { generateClient } from "./client";

interface IGetUsersResDto extends IResDto {
  users: IUser[];
}

type getUsersListType = () => Promise<IGetUsersResDto>;
export const getUsersList: getUsersListType = async  () => {
  const client = generateClient();
  const response = await client.get<IGetUsersResDto>(urls.users.list);
  return response.data;
};