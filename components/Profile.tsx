"use client";

import Link from "next/link";
import React from "react";

const Profile = () => {
  const user = "Authenticated";
  return (
    <div className=" px-2 ">
      {user ? (
        <Link href={"/login"}>Login</Link>
      ) : (
        <div className="flex gap-x-2 items-center">
          <Link href={"/write"} className="p-3 underline">
            Write
          </Link>
          <span>Logout</span>
        </div>
      )}
    </div>
  );
};

export default Profile;
