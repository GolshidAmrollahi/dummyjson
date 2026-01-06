import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { MdOutlineVisibility } from "react-icons/md";

import type { IPost } from "../types/post.type";
import type { IUser } from "../types/user.type";
import { stringToColor, stringToTextColor } from "../utils/str-to-color";


interface IPostCardProps {
  user?: IUser;
  post: IPost;
}
export const PostCardSkeleton: React.FC = () => {
  return (
    <div className="sshadow-md bg-white mx-2 my-2  px-4 py-2 animate-pulse">
      <div className="flex items-center">
        <div className="content-center self-stretch   ">
          <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
        </div>
        <div className="mx-2 my-1 px-2 py-1 space-y-2 ">
          <div className="text-gray-800 w-24 h-4 bg-gray-400 rounded-sm "></div>

          <div className="text-gray-800 w-30 h-2 bg-gray-300 rounded-sm "></div>
        </div>
      </div>
      <div className=" my-3 px-2 py-1 max-w-150 space-y-2">
        <div className=" pt-1  w-30 h-6 bg-gray-500 rounded-xs"></div>
        <div className="space-y-1">
          <div className="w-full h-4 bg-gray-400 rounded-xs "></div>
          <div className="w-full h-4 bg-gray-400 rounded-xs "></div>
          <div className="w-2/3 h-4 bg-gray-400 rounded-xs "></div>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="flex space-x-3 px-3 py-2 order-2">
          <div className="flex space-x-0.5  text-gray-500 ">
            <span className="self-center">
              <BiLike className="w-4 h-4" />
            </span>
            <span className="text-xs font-semibold w-5 h-3 bg-gray-400 self-center rounded-lg"></span>
          </div>
          <div className="flex space-x-0.5 text-gray-500">
            <span className="self-center">
              <BiDislike className="w-4 h-4" />
            </span>
            <span className="text-xs font-semibold w-5 h-3 bg-gray-400 self-center rounded-lg"></span>
          </div>
          <div className="flex space-x-0.5 text-gray-500">
            <span className="self-center">
              <MdOutlineVisibility className="w-4 h-4" />
            </span>
            <span className="text-xs font-semibold w-6 h-3 bg-gray-400 self-center rounded-lg"></span>
          </div>
        </div>
        <div className="flex gap-x-3  self-center ">
          <span className=" rounded-xl w-10 h-3 bg-gray-400"></span>
          <span className=" rounded-xl w-8 h-3 bg-gray-400"></span>
        </div>
      </div>
    </div>
  );
};

export const PostCard: React.FC<IPostCardProps> = ({ user, post }) => {
  return (
    <section className="sshadow-md bg-white mx-2 my-4  rounded-sm px-4 py-2 ">
      <div className="flex items-center">
        <div className="content-center self-stretch  rounded-full ">
          <img className="w-15 h-15" src={user?.image} alt={user?.username} />
        </div>
        <div className="mx-2 my-1 px-2 py-1  overflow-hidden">
          <p className="text-gray-800 text-xl font-semibold capitalize ">
            {user?.username}
          </p>
          {/* <p className="text-gray-600 text-xs font-semibold pl-2">{`${post?.views} views`}</p> */}
          <p className="text-gray-600 text-xs font-semibold  truncate ">
            {user?.email}
          </p>
        </div>
      </div>
      <div className=" my-2 px-2 py-1 max-w-150">
        <p className=" text-red-600 font-semibold pt-1 text-sm truncate capitalize">
          {post.title}
        </p>
        <p className=" text-gray-800 font-semibold text-justify   text-xs line-clamp-3">
          {post.body.length > 200 ? post.body : post.body.slice(0, 200)}
        </p>
      </div>
      <div className="flex justify-between ">
        <div className="flex space-x-3 px-3 py-2 order-2">
          <div className="flex space-x-0.5  text-gray-500 ">
            <span className="self-center">
              <BiLike className="w-4 h-4" />
            </span>
            <span className="text-xs font-semibold">
              {post.reactions.likes}
            </span>
          </div>
          <div className="flex space-x-0.5 text-gray-500">
            <span className="self-center">
              <BiDislike className="w-4 h-4" />
            </span>
            <span className="text-xs font-semibold">
              {post.reactions.dislikes}
            </span>
          </div>
          <div className="flex space-x-0.5 text-gray-500">
            <span className="self-center">
              <MdOutlineVisibility className="w-4 h-4" />
            </span>
            <span className="text-xs font-semibold">{post.views}</span>
          </div>
        </div>
        <div className="flex gap-x-3 text-sm font-semibold text-gray-600 self-center ">
          {post.tags.map((el, index) => {
            const colorHash = stringToColor(el);

            return (
              <div
                key={index}
                style={{
                  backgroundColor: colorHash,
                  color: stringToTextColor(colorHash),
                }}
                className=" text-xs font-semibold  rounded-2xl  px-1 font-mono hover:cursor-pointer"
              >
                {el}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
