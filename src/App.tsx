import { createBrowserRouter, RouterProvider } from "react-router";
import { MainLayout } from "./layouts/main";
import { HomePage } from "./pages/home";
import { UsersPage } from "./pages/users";
import { PostsPage } from "./pages/posts";

const router = createBrowserRouter([
  // {
  //   path: "/", 
  // element: (
  //   <div>
  //     <h1>Home page</h1>
  //   </div>
  // )
  // },
  {

    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />

      },
      {
        path: "users",
        element: <UsersPage />
      },
      {
        path: "posts",
        element: <PostsPage />
      }
    ]
  }

])

function App() {


  return (
    
      <RouterProvider router={router}>

      </RouterProvider>

    
  )
}

export default App
