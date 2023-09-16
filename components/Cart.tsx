import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pagination from "./Pagination";

const Cart = () => {
  return (
    <div className="flex items-center mb-5 gap-x-4">
      <div className="relative h-72 flex-1 ">
        <Image
          src={"/p1.jpeg"}
          fill
          alt="CartImage"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 ">
        <div>
          <span className="text-gray-500">11.2.2023 - </span>
          <span className=" text-red-600">culture</span>
        </div>
        <Link href={"/"}>
          <h1 className="font-semibold my-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </h1>
        </Link>
        <p className="text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          error illo eius eum neque tempora, quibusdam iure tempore dolorem
          soluta atque distinctio amet modi fugit.
        </p>
        <Link
          href={"/"}
          className="text-semibold border-b-2 hover:text-red-500 py-1 max-w-max"
        >
          Read more!
        </Link>
      </div>
    </div>
  );
};

export default Cart;
