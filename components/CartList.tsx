import React from "react";
import Cart from "./Cart";
import Pagination from "./Pagination";
// import { getPosts } from "@/action/getPost";

const CartList = async () => {
  // const posts = await getPosts();
  return (
    <div className=" flex-5">
      <h1 className=" text-3xl font-bold my-10">Recent Post</h1>
      <div className="flex flex-col">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
      <Pagination />
    </div>
  );
};

export default CartList;
