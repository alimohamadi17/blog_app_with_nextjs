import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center p-8 text-white">
      <button className="bg-red-500 px-7 py-3">Prev</button>
      <button className="bg-red-500 px-7 py-3">Next</button>
    </div>
  );
};

export default Pagination;
