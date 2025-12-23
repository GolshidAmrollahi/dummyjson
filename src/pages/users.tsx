import { UsersList } from "../containers/users-list"

export const UsersPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <p><UsersList /></p>
    </div>
  )
}