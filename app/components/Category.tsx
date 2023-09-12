import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <>
      <h1 className="mt-10 mb-10 text-2xl font-bold">Popular Categories</h1>
      <div
        className=" flex flex-row
                  items-center  justify-around
                  gap-5 "
      >
        <Link href={"/blog?cat=style"}>
          <div className="bg-violet-300 gap-2 flex flex-row items-center justify-center w-[150px] px-2 py-2 rounded-lg">
            <div className="border-2 rounded-full w-[50px] h-[50px] overflow-hidden ">
              <Image src={"/style.png"} alt="style" width={50} height={50} />
            </div>
            <span>style</span>
          </div>
        </Link>

        <Link href={"/blog?cat=style"}>
          <div className="bg-green-300 gap-2 flex flex-row items-center justify-center w-[150px] px-2 py-2 rounded-lg">
            <div className="border-2 rounded-full w-[50px] h-[50px] overflow-hidden ">
              <Image
                src={"/fashion.png"}
                alt="fashion"
                width={50}
                height={50}
              />
            </div>
            <span>fashion</span>
          </div>
        </Link>

        <Link href={"/blog?cat=style"}>
          <div className="bg-blue-300 gap-2 flex flex-row items-center justify-center w-[150px] px-2 py-2 rounded-lg">
            <div className="border-2 rounded-full w-[50px] h-[50px] overflow-hidden ">
              <Image src={"/food.png"} alt="food" width={50} height={50} />
            </div>
            <span>food</span>
          </div>
        </Link>

        <Link href={"/blog?cat=style"}>
          <div className="bg-yellow-300 gap-2 flex flex-row items-center justify-center w-[150px] px-2 py-2 rounded-lg">
            <div className="border-2 rounded-full w-[50px] h-[50px] overflow-hidden ">
              <Image src={"/travel.png"} alt="travel" width={50} height={50} />
            </div>
            <span>travel</span>
          </div>
        </Link>

        <Link href={"/blog?cat=style"}>
          <div className="bg-pink-300 gap-2 flex flex-row items-center justify-center w-[150px] px-2 py-2 rounded-lg">
            <div className="border-2 rounded-full w-[50px] h-[50px] overflow-hidden ">
              <Image
                src={"/culture.png"}
                alt="culture"
                width={50}
                height={50}
              />
            </div>
            <span>culture</span>
          </div>
        </Link>

        <Link href={"/blog?cat=style"}>
          <div className="bg-cyan-300 gap-2 flex flex-row items-center justify-center w-[150px] px-2 py-2 rounded-lg">
            <div className="border-2 rounded-full w-[50px] h-[50px] overflow-hidden ">
              <Image src={"/food.png"} alt="coding" width={50} height={50} />
            </div>
            <span>coding</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Category;
