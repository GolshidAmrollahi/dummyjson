import type { IUser } from "../types/user.type";

export const UserCard: React.FC<IUser> = ({
  id,
  username,
   image,
   age,
   address,
   role
}) => {
  return (
    <div className="mx-2 my-4 border-2 border-red-300 px-4 py-2 flex justify-start rounded-sm">
      <img src={image} className="shadow-2xl pr-4 rounded-md"/>
      <div className="pl-4 py-3 flex-col   font-semibold font-mono">
        <p className="text-lg">#{id}: {username}</p>
        <div className="py-2 px-3">
          <p >{age} years old</p>
        <p>from {address.city}</p>
        <p>{role} role</p>
        </div>
      
      </div>
      
    </div>
  )
}