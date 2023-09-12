import React from "react";
import Cart from "./Cart";
import Pagination from "./Pagination";

const CartList = () => {
  return (
    <div className=" flex-5">
      <h1 className=" text-3xl font-bold my-10">Recent Post</h1>
      <div className="flex flex-col">
        <Cart />
        <Cart />
      </div>
      <Pagination />
    </div>
  );
};

export default CartList;