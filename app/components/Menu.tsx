import Image from "next/image";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="flex-2 my-10">
      <h3 className="text-gray-400">What's hot?</h3>
      <h1 className=" text-2xl font-bold pb-3">Most Popular</h1>

      <div className="flex  flex-col gap-y-6 mb-10">
        <Link href={"/"} className="flex items-center">
          <div className="flex-4 pl-2">
            <span className="bg-blue-300 rounded-full px-2">Food</span>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              accusantium illum officia{" "}
            </h1>
            <div className=" text-sm text-gray-500">
              <span>Jone Doee</span>
              <span>11.02.2023</span>
            </div>
          </div>
        </Link>
        {/*  */}
        <Link href={"/"} className="flex items-center">
          <div className="flex-4 pl-2">
            <span className="bg-orange-300 rounded-full px-2">Travel</span>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              accusantium illum officia{" "}
            </h1>
            <div className=" text-sm text-gray-500">
              <span>Jone Doee</span>
              <span>11.02.2023</span>
            </div>
          </div>
        </Link>
        {/*  */}
        <Link href={"/"} className="flex items-center">
          <div className="flex-4 pl-2">
            <span className="bg-red-300 rounded-full px-2">Culture</span>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              accusantium illum officia{" "}
            </h1>
            <div className=" text-sm text-gray-500">
              <span>Jone Doee</span>
              <span>11.02.2023</span>
            </div>
          </div>
        </Link>
        {/*  */}
        <Link href={"/"} className="flex items-center">
          <div className="flex-4 pl-2">
            <span className="bg-pink-300 rounded-full px-2">Fashion</span>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              accusantium illum officia{" "}
            </h1>
            <div className=" text-sm text-gray-500">
              <span>Jone Doee</span>
              <span>11.02.2023</span>
            </div>
          </div>
        </Link>
      </div>
      {/* NEW ITEM */}
      <h3 className="text-gray-400">Wchosen by ther editor</h3>
      <h1 className=" text-2xl font-bold pb-3">Edit Picks</h1>
      <div className="flex  flex-col gap-y-6">
        <Link href={"/"} className="flex items-center">
          <div className="pr-2  ">
            <div className=" h-[100px] w-[100px] flex-1 border-4 border-gray-300 rounded-full overflow-hidden ">
              <Image
                src={"/p1.jpeg"}
                width={130}
                height={100}
                alt="popular"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-4 pl-2">
            <span className="bg-blue-300 rounded-full px-2">Food</span>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              accusantium illum officia{" "}
            </h1>
            <div className=" text-sm text-gray-500">
              <span>Jone Doee</span>
              <span>11.02.2023</span>
            </div>
          </div>
        </Link>
        {/*  */}
        <Link href={"/"} className="flex items-center">
          <div className="pr-2  ">
            <div className=" h-[100px] w-[100px] flex-1 border-4 border-gray-300 rounded-full overflow-hidden ">
              <Image
                src={"/p1.jpeg"}
                width={130}
                height={100}
                alt="popular"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-4 pl-2">
            <span className="bg-orange-300 rounded-full px-2">Travel</span>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              accusantium illum officia{" "}
            </h1>
            <div className=" text-sm text-gray-500">
              <span>Jone Doee</span>
              <span>11.02.2023</span>
            </div>
          </div>
        </Link>
        {/*  */}
        <Link href={"/"} className="flex items-center">
          <div className="pr-2  ">
            <div className=" h-[100px] w-[100px] flex-1 border-4 border-gray-300 rounded-full overflow-hidden ">
              <Image
                src={"/p1.jpeg"}
                width={130}
                height={100}
                alt="popular"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-4 pl-2">
            <span className="bg-red-300 rounded-full px-2">Culture</span>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              accusantium illum officia{" "}
            </h1>
            <div className=" text-sm text-gray-500">
              <span>Jone Doee</span>
              <span>11.02.2023</span>
            </div>
          </div>
        </Link>
        {/*  */}
        <Link href={"/"} className="flex items-center">
          <div className="pr-2  ">
            <div className=" h-[100px] w-[100px] flex-1 border-4 border-gray-300 rounded-full overflow-hidden ">
              <Image
                src={"/p1.jpeg"}
                width={130}
                height={100}
                alt="popular"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-4 pl-2">
            <span className="bg-pink-300 rounded-full px-2">Fashion</span>
            <h1 className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              accusantium illum officia{" "}
            </h1>
            <div className=" text-sm text-gray-500">
              <span>Jone Doee</span>
              <span>11.02.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
