"use client";

import Link from "next/link";
import React from "react";
import UserProfile from "./userButton";
import { useAuth } from "@clerk/nextjs";

const Profile = () => {
  const { userId } = useAuth();

  return (
    <div className=" px-2 ">
      {!userId ? (
        <Link href={"/login"}>Login</Link>
      ) : (
        <div className="flex gap-x-2 items-center">
          <Link href={"/write"} className="p-3 underline">
            Write
          </Link>
          <span>Logout</span>
          <UserProfile />
        </div>
      )}
    </div>
  );
};

export default Profile;
