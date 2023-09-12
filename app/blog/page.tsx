import React from "react";
import CartList from "../components/CartList";
import Menu from "../components/Menu";

const BlogPage = () => {
  return (
    <div className="px-20">
      <div className=" my-16 bg-red-500 p-3">
        <h1 className="text-center text-2xl font-semibold text-white">
          Style Blog
        </h1>
      </div>
      <div className="flex ">
        <CartList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
