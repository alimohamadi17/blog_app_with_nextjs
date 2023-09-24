import { getCategory } from "@/action/getCategories";
import { CategoryProps } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const color = [
  "bg-cyan-300",
  "bg-yellow-300",
  "bg-green-300",
  "bg-blue-300",
  "bg-pink-300",
  "bg-orange-300",
];

const Category = async () => {
  const categories: CategoryProps[] = await getCategory();
  return (
    <>
      <h1 className="mt-10 mb-10 text-2xl font-bold">Popular Categories</h1>
      <div
        className=" flex flex-row
                  items-center  justify-around
                  gap-5 "
      >
        {categories.map((item) => (
          <Link href={"/blog?cat=style"} key={item._id}>
            <div
              className={`bg-${item.bgColor}-300
               gap-2 flex flex-row items-center justify-center w-[150px] px-2 py-2 rounded-lg`}
            >
              <div className="border-2 rounded-full w-[50px] h-[50px] overflow-hidden ">
                {item.image && (
                  <Image
                    src={item.image}
                    alt="style"
                    width={50}
                    height={50}
                    className=" object-cover"
                  />
                )}
              </div>
              <span>{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
