import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "@/components/Menu";
import Comments from "@/components/Comments";

const SinglePage = () => {
  return (
    <>
      <div className="flex justify-between  mt-10 p-20">
        <div className="flex-1 flex  justify-between flex-col pr-10 p-4">
          <div>
            <h1 className="text-4xl font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id aut
              et tempore explicabo nemo tempore explicabo nemo
            </h1>
          </div>
          <div className="flex flex-row  items-center gap-2  pt-10">
            <div className=" w-[100px]  h-[100px]  border-4 border-gray-300 rounded-full overflow-hidden ">
              <Image
                src={"/p1.jpeg"}
                width={130}
                height={120}
                alt="popular"
                className="object-cover "
              />
            </div>

            <div className=" text-sm text-gray-500 flex flex-col gap-2 pt-2">
              <span>ALi Mohamadi</span>
              <span>25 April 2023</span>
            </div>
          </div>
        </div>

        <div className="flex-1 w-[700px] h-[400px] overflow-hidden border-4 border-gray-300 rounded-md">
          <Image
            src={"/p1.jpeg"}
            width={700}
            height={100}
            alt="popular"
            className="object-cover "
          />
        </div>
      </div>
      <div className="flex  px-20 space-x-10">
        <div className="flex-5 space-y-5 mt-10  text-justify">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
            vitae fuga deserunt consequuntur? Eos eum repellat, amet recusandae
            accusantium adipisci voluptatum ipsa officia molestiae impedit? Ad
            facilis assumenda est ratione!
          </p>
          <h1 className=" font-semibold text-2xl">
            Lorem, ipsum dolor sit amet
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            deserunt distinctio dolor, repellat numquam quos minus expedita
            pariatur ab officia exercitationem ad fugit asperiores possimus
            nostrum temporibus quibusdam earum non!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut porro
            rem ab quaerat sed alias doloribus maiores officiis fuga. Itaque ab
            sapiente architecto ullam ipsa magni? Reiciendis voluptates possimus
            ullam?
          </p>
          <div>
            <Comments />
          </div>
        </div>

        <div className="flex-2">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default SinglePage;
