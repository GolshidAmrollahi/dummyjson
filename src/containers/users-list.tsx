import React, { useEffect } from "react";
// import type { IUser } from "../types/user.type";
// import { errorHandler } from "../utils/errorHandler";
// import type { AxiosError } from "axios";
import { getUsersList } from "../apis/users.api";

import { UserCard } from "../components/user-card";
import { useQuery } from "@tanstack/react-query";

export const UsersList: React.FC = () => {
  // const [list, setList] = React.useState<IUser[]>([]);
  
  // const fetchUsersList = async () => {
  //   try {
  //     const response = await getUsersList();
  //     setList(response.users);
  //   } catch (error) {
  //    errorHandler(error as AxiosError) ;
  //   }
  // // }

  // React.useEffect(() => {
  //   fetchUsersList();
  // }, [])

  // return (
  //   <section>
  //     {list.map((el) => (
  //       <UserCard
  //       key={el.id}
  //       {...el}
  //       >
          
  //       </UserCard>
  //     ))
  //     }
  //   </section>
  // )

  const users = useQuery({
    queryKey: ["fetching-users"],
    queryFn: getUsersList,
  });
  useEffect(() => {
    console.log(users.data);
  },[users])
  useEffect(() => {
    if(!users.error || !users.isError) return;
    throw new Error("Custom Error Messages");
  },[users.error, users.isError])
  return (
    <section>
      
      {users.data?.users.map((el) => (
        <UserCard key={el.id} {...el}></UserCard>
        
      ))}
      <button
       onClick={() => console.log("load more clicked")}
       className="bg-red-400 block my-7 mx-auto py-2 px-4 text-lg text-white font-semibold rounded-md hover:text-gray-700 hover:cursor-pointer">Load More</button>
    </section>
  );
}