"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";

import { ArrowUpTrayIcon, PhotoIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { userId } = useAuth();

  return (
    <>
      {!userId ? (
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
          <div className="relative">
            <button className="p-2 max-w-max bg-green-500 text-white -my-10 right-0 absolute ">
              Publish
            </button>
          </div>

          <input
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
              value={value}
              onChange={setValue}
              className=" text-black w-full h-56 text-3xl"
              placeholder="Tell your story."
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WritePage;
