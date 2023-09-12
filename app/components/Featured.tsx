import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="mt-20">
      <div className="flex">
        <div className=" flex-1 w-1/2 relative h-96 ">
          <Image
            src={"/p1.jpeg"}
            alt="FeaturedImage"
            fill
            className=" rounded-lg object-cover"
          />
        </div>
        <div
          className=" flex flex-1 flex-col gap-y-4 pt-6
         items-center
        text-justify pl-8"
        >
          <h1 className="font-semibold text-4xl text-center ">
            Hey, Ali is here! Discover my stories and creative ideas
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper
            feugiat, nostra tempor suscipit integer inceptos velit lacinia
            curabitur volutpat vehicula, eget pulvinar hac varius ultrices vitae
            aenean dictum. Ante felis mattis primis in mi venenatis, laoreet
            pharetra maecenas cubilia cras urna, egestas proin donec sodales
            eleifend. Placerat turpis massa ultricies penatibus cubilia mattis
            ligula varius lectus, maecenas sociosqu volutpat fringilla ut
            ridiculus faucibus senectus, ultrices sed in primis purus fermentum
            etiam nec.
          </p>
          <button
            className="bg-gray-200 hover:scale-110 rounded-lg 
          border-none
          text-blue-600 p-2  text-center "
          >
            Read More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
