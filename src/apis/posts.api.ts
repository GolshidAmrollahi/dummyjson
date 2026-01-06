import type { IPagination, IResDto } from "../types/global.types";
import type { IPost } from "../types/post.type";
import { listLimit } from "../utils/config";
import { urls } from "../utils/urls";
import { generateClient } from "./client";


interface IGetPostsResDto  extends IResDto{
  posts: IPost[];
 
}

type getPostsListType = (_?: IPagination) => Promise<IGetPostsResDto>;
export const getPostsList: getPostsListType = async (params) => {
  const client = generateClient();
  const response = await client.get<IGetPostsResDto>(urls.posts.list, { params: {limit: params?.limit || listLimit, skip: params?.skip || 0}});
  return response.data;
}  