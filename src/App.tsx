import { createBrowserRouter, RouterProvider } from "react-router";
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import { MainLayout } from "./layouts/main";
import { HomePage } from "./pages/home";
import { UsersPage } from "./pages/users";
import { PostsPage } from "./pages/posts";
import { ErrorBoundary } from "./components/errorBoundary";

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
        element: <UsersPage />,
        errorElement: <ErrorBoundary />
      },
      {
        path: "posts",
        element: <PostsPage />
      }
    ]
  }

])

const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
}

export default App
