import { Link } from "react-router"

export const Navbar: React.FC = () => {
  return (
    <section className="flex justify-center gap-x-3 bg-gray-400 text-gray-800 py-3 px-2 text-2xl font-semibold">
      <Link to="/">
       <button className="hover:cursor-pointer hover:text-gray-200 py-1 px-2">
        home
       </button>
      </Link>
      <Link to="/users">
       <button className="hover:cursor-pointer hover:text-gray-200 py-1 px-2">
        users
       </button>
      </Link>
      <Link to="/posts">
       <button className="hover:cursor-pointer hover:text-gray-200 py-1 px-2">
        posts
       </button>
      </Link>
      {/* <Link to="/comments">
       <button className="hover:cursor-pointer hover:text-gray-200 py-1 px-2">
        comments
       </button>
      </Link> */}
    </section>
  );
};