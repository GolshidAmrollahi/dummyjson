import { Navigate, UNSAFE_ErrorResponseImpl, useRouteError } from "react-router";

export const ErrorBoundary : React.FC = () => {
  const error = useRouteError();

  if(error instanceof UNSAFE_ErrorResponseImpl && (error as UNSAFE_ErrorResponseImpl).status === 404) {
    return <Navigate to={"/404"} />
  }

  return (
    <div>
      <p>Something went wrong</p>
      <p>{(error as Error).message}</p>
    </div>
  )

}
