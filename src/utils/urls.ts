export const urls =  {
  users: {
    list: "/users",
    byId: (id:number) => `/users/${id}`,
  },
  posts: {
    list: "/posts",
  }
};