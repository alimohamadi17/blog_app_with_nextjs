import Link from "next/link";
import React from "react";

const Profile = () => {
  const status = "notAuthenticated";
  return (
    <div className=" px-2 ">
      {status === "notAuthenticated" ? (
        <Link href={"/login"}>Login</Link>
      ) : (
        <>
          <Link href={"/write"} className="p-3 underline">
            Write
          </Link>
          <span>Logout</span>
        </>
      )}
    </div>
  );
};

export default Profile;
