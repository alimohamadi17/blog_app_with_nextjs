import Image from "next/image";
import Link from "next/link";
import React from "react";

const Comments = () => {
  const user = "authenticated";
  return (
    <>
      <div className="flex flex-col gap-y-2 pt-5">
        <h1 className=" text-2xl border-b-2 max-w-max">Comments</h1>
        {user === "authenticated" ? (
          <div>
            <input
              type="text"
              placeholder="write your comment"
              className="border-4 p-2 w-1/2 rounded-l-lg outline-none"
            />
            <button
              type="button"
              className="border-4 border-blue-300 px-4 py-2 bg-blue-300 rounded-r-lg"
            >
              Send
            </button>
          </div>
        ) : (
          <Link href={"/login"}>Login to write comment</Link>
        )}
        {/* show comments */}
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row  items-center gap-2  pt-10">
            <div className=" w-[50px]  h-[50px]  border-4 border-gray-300 rounded-full overflow-hidden ">
              <Image
                src={"/p1.jpeg"}
                width={130}
                height={120}
                alt="popular"
                className="object-cover "
              />
            </div>

            <div className=" text-sm text-gray-500 flex flex-col gap-2 pt-2">
              <span>ALi Mohamadi</span>
              <span>25 April 2023</span>
            </div>
          </div>
          <h1 className=" text-sm p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus odio
            tempore similique quae enim aspernatur tempora velit pariatur nam ex
            neque odit voluptatum asperiores, ullam id et ut distinctio eius?
          </h1>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row  items-center gap-2  pt-10">
            <div className=" w-[50px]  h-[50px]  border-4 border-gray-300 rounded-full overflow-hidden ">
              <Image
                src={"/p1.jpeg"}
                width={130}
                height={120}
                alt="popular"
                className="object-cover "
              />
            </div>

            <div className=" text-sm text-gray-500 flex flex-col gap-2 pt-2">
              <span>ALi Mohamadi</span>
              <span>25 April 2023</span>
            </div>
          </div>
          <h1 className=" text-sm p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus odio
            tempore similique quae enim aspernatur tempora velit pariatur nam ex
            neque odit voluptatum asperiores, ullam id et ut distinctio eius?
          </h1>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-row  items-center gap-2  pt-10">
            <div className=" w-[50px]  h-[50px]  border-4 border-gray-300 rounded-full overflow-hidden ">
              <Image
                src={"/p1.jpeg"}
                width={130}
                height={120}
                alt="popular"
                className="object-cover "
              />
            </div>

            <div className=" text-sm text-gray-500 flex flex-col gap-2 pt-2">
              <span>ALi Mohamadi</span>
              <span>25 April 2023</span>
            </div>
          </div>
          <h1 className=" text-sm p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus odio
            tempore similique quae enim aspernatur tempora velit pariatur nam ex
            neque odit voluptatum asperiores, ullam id et ut distinctio eius?
          </h1>
        </div>
      </div>
    </>
  );
};

export default Comments;
