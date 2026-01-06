import React, { useEffect, useState } from "react";
// import useState from "react";
// import type { IPost } from "../types/post.type";
import { getPostsList } from "../apis/posts.api";
// import { errorHandler } from "../utils/errorHandler";
// import type { AxiosError } from "axios";
import { PostCard, PostCardSkeleton } from "../components/post-card";
import { useQuery } from "@tanstack/react-query";
import { getUsersListByIds } from "../apis/users.api";
import type { IPost } from "../types/post.type";
import type { IUser } from "../types/user.type";
import { listLimit } from "../utils/config";
// import type { IUser } from "../types/user.type";
// import type { IPost } from "../types/post.type";

export const PostsList: React.FC = () => {

  interface IData {
    post: IPost,
    user: IUser
  };
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<IData[]>([]);
  const [newFetching, setNewFetching] = useState<boolean>(false);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  // interface IPostWithUser extends IPost {
  //   user?: IUser
  // }
  // const [list, setList] = useState<IPostWithUser[]>([]);
  // const [list, setList] = useState<IPost[]>([]);
  // const fetchPostsList = async () => {
  //   try{
  //     const response = await getPostsList();
  //     setList(response.posts);
  //   } catch (error) {
  //     errorHandler(error as AxiosError);
  //   }
  // } 

  // React.useEffect(() => {
  //   fetchPostsList();
  // },[]);

  // return (
  //    <section>

  //         {list.map((el) => (
  //           <PostCard key={el.id} {...el}></PostCard>

  //         ))}
  //         <button
  //          onClick={() => console.log("load more clicked")}
  //          className="bg-red-400 block my-7 mx-auto py-2 px-4 text-lg text-white font-semibold rounded-md hover:text-gray-700 hover:cursor-pointer">Load More</button>
  //       </section>
  // );
  const posts = useQuery({
    queryKey: ["fetching-posts", page],
    queryFn: () => getPostsList({ skip: page * listLimit - listLimit }),
    // refetchOnWindowFocus: false,
     
  });

  // const users2 = useQueries({
  //   queries: [
  //     {
  //       queryKey: ["fetching-posts2"],
  //       queryFn: () => getPostsList({ skip: 0}),
  //     },
  //     {
  //       queryKey: ["fetching-posts2"],
  //       queryFn: () => getPostsList({ skip: 0}),
  //     },
  //   ],
  // });
  // console.log(users2.)
  const users = useQuery({
    queryKey: ["fetching-users-by-ids", (posts.data?.posts || []).map((el) => String(el.userId)).join("")],
    queryFn: () =>
      getUsersListByIds(
        (posts.data?.posts || []).map((el) => Number(el.userId))
      ),
    enabled: posts.isSuccess,
  });

  useEffect(() => {
    setNewFetching(true);
  }, [page]);

  useEffect(() => {
    if (!posts.error || !posts.isError) return;
    throw new Error("Custom Error Message");
  }, [posts.error, posts.isError]);

  useEffect(() => {
    console.log(users.data);
  }, [users.isSuccess, users.data]);

  useEffect(() => {
    if (!newFetching) return;
    if (!posts.isSuccess || !users.isSuccess) return ;
    if (!posts.data || !users.data) return ;
    setDataLoading(() => true);
    const newData: IData[] = [];
    for(const post of posts.data.posts) {
      const user = users.data.find(
          (el) => Number(el.id) === Number(post.userId)) as IUser;
          newData.push({user, post});
    }
   // setData(newData);
   setData((prevState)=>[...prevState, ...newData])
    setDataLoading(false);
    setNewFetching(false);
  },[posts.isSuccess, posts.data, users.isSuccess, users.data, newFetching]);
  return (
    <section className="mx-auto max-w-[600px] w-full grid grid-cols-1 gap-y-4 py-10">
      
      {data.map((el) => {
        return <PostCard key={el.post.id} post={el.post} user={el.user} />;
      })}
      {(posts.isLoading || users.isLoading || dataLoading) && (
        <>
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
        </>
      )} 
      <button
        disabled={posts.data ? (data.length === posts.data.total) : false}
        onClick={() => setPage((prevPage) => prevPage + 1)}
        className="bg-red-400 block my-7 mx-auto py-2 px-4 text-lg text-white font-semibold rounded-md hover:text-gray-700 hover:cursor-pointer disabled:bg-red-100"
      >
        Load More
      </button>
    </section>
  );
};
