"use client";

import { useSession, signIn } from "next-auth/react";
import { DataProps } from "@/types/type";
import {
  EnvelopeIcon,
  EyeSlashIcon,
  UserIcon,
} from "@heroicons/react/20/solid";

import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";

const LogingPage = () => {
  const { data, status } = useSession();

  const router = useRouter();

  const [user, setUser] = useState<DataProps>({
    name: "",
    email: "",
    password: "",
  });

  const hanldeInput = useCallback(
    (e: any) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    },
    [user.name, user.email, user.password]
  );

  const registerUser = async () => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user }),
      });

      const userInfo = await res.text();
      console.log("userInfo :", userInfo);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (status === "loading") {
    return <div>loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="my-10 p-10">
      <div className="w-[500px]  mx-auto shadow-md border-2 ">
        <div className="flex items-center justify-center flex-col  gap-5 p-5">
          <div className=" border-2 bg-red-500 m-2 p-4 cursor-pointer">
            <span onClick={() => signIn("google")}>sign in with google</span>
          </div>
          <div className=" border-2 bg-red-500 m-2 p-4 cursor-pointer">
            <span onClick={() => signIn("github")}>sign in with github</span>
          </div>
          <span className="w-full bg-gray-400 h-1 rounded-full"></span>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="user" className="flex items-center gap-x-2">
              <UserIcon className="text-blue-500 w-6 h-10" />
              username
            </label>
            <input
              name="name"
              type="text"
              id="user"
              value={user.name}
              className="border-2 p-2 rounded-lg outline-blue-600"
              placeholder="type your user name"
              onChange={hanldeInput}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="user" className="flex items-center gap-x-2">
              <EnvelopeIcon className="text-blue-500 w-6 h-10" />
              email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={user.email}
              className="border-2 p-2 rounded-lg outline-blue-600"
              placeholder="type your Email"
              onChange={hanldeInput}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="pass" className="flex items-center gap-x-2">
              <EyeSlashIcon className="text-blue-500 w-5 h-10" />
              password
            </label>
            <input
              name="password"
              type="password"
              id="pass"
              value={user.password}
              className="border-2 p-2  rounded-lg outline-blue-600"
              placeholder="type your password"
              onChange={hanldeInput}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 text-white  px-6 py-2 rounded-full"
            onClick={registerUser}
          >
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogingPage;
