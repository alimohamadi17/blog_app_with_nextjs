"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
// import dynamic from "next/dynamic";
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";

import { ArrowUpTrayIcon, PhotoIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSession } from "next-auth/react";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const { data, status } = useSession();

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
  };

  if (status === "loading") {
    return <div className="w-full mx-auto p-10 text-2xl">Loading...</div>;
  }
  return (
    <>
      {!data?.user ? (
        <div className="my-20 flex items-center justify-center mx-auto w-[500px] h-[500px]  ">
          <Link
            href={"/login"}
            className=" font-bold text-3xl text-blue-400 border border-blue-300 rounded-full px-8 py-4 hover:scale-110 max-w-max"
          >
            Login to write comment
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-y-2 mt-10 p-20">
          <form onSubmit={handlesubmit}>
            <div className="relative">
              <button
                type="submit"
                className="p-2 max-w-max bg-green-500 text-white -my-10 right-0 absolute "
              >
                Publish
              </button>
            </div>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
              className="my-2 p-3 border-b-2 outline-none text-3xl bg-gray-200"
            />
            <div className="flex flex-col border-4">
              <div className="flex ">
                <button onClick={() => setOpen((open) => !open)}>
                  <PlusCircleIcon
                    className={`h-12 w-12 text-gray-500  ${
                      open === true ? "rotate-[45deg]" : null
                    }`}
                  />
                </button>
                {open && (
                  <div className="flex items-center gap-2">
                    <button>
                      <PhotoIcon className="h-10 w-10 text-blue-500 border rounded-full p-1  hover:scale-110" />
                    </button>
                    <button>
                      <VideoCameraIcon className="h-10 w-10 text-blue-500 border rounded-full p-1 hover:scale-110" />
                    </button>
                    <button className="h-10 w-10 text-blue-500 border rounded-full p-1 hover:scale-110">
                      <ArrowUpTrayIcon />
                    </button>
                  </div>
                )}
              </div>
              <ReactQuill
                theme="bubble"
                value={description}
                onChange={setDescription}
                className=" text-black w-full h-56 text-3xl"
                placeholder="Tell your story."
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default WritePage;
