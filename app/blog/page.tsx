import React from "react";
import CartList from "@/components/CartList";
import Menu from "@/components/Menu";

const BlogPage = () => {
  return (
    <div className="px-20 ">
      <div className=" my-16 bg-red-500 p-4 rounded-t-full">
        <h1 className="text-center text-2xl font-semibold text-white">
          style Blog
        </h1>
      </div>
      <div className="flex gap-x-2">
        <CartList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
