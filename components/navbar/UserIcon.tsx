import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { LuUser } from "react-icons/lu";

async function UserIcon() {
  const user = await currentUser();

  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <div>
        <img
          src={profileImage}
          alt="image"
          className=" h-6 w-6 rounded-full object-cover"
        />
      </div>
    );
  }
  return <LuUser className="w-6 h-6 bg-blue-500 rounded-full text-white" />
}

export default UserIcon;
