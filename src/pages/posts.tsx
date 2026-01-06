import { PostsList } from "../containers/posts-list"

export const PostsPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <PostsList />
    </div>
  )
}