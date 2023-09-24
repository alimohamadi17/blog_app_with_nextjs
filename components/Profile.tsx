"use client";

import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const Profile = () => {
  const { status } = useSession();
  return (
    <div className=" px-2 ">
      {status === "unauthenticated" ? (
        <Link href={"/login"}>Login</Link>
      ) : (
        <div className="flex gap-x-2 items-center">
          <Link href={"/write"} className="p-3 underline">
            Write
          </Link>
          <span onClick={() => signOut()} className=" cursor-pointer">
            Logout
          </span>
        </div>
      )}
    </div>
  );
};

export default Profile;
