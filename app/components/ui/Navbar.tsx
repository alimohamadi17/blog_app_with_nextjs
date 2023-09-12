import Image from "next/image";
import React from "react";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import Profile from "../Profile";

const cinzel = Cinzel({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className=" flex  bg-gray-50 items-center shadow-md p-5 justify-between xl:px-20 md:px-10 sm:px-8">
      <div className="hidden md:flex flex-row gap-1  cursor-pointer">
        <Image src={"/facebook.png"} alt="facebook" width={24} height={24} />
        <Image src={"/instagram.png"} alt="instagram" width={24} height={24} />
        <Image src={"/youtube.png"} alt="youtube" width={24} height={24} />
        <Image src={"/tiktok.png"} alt="tiktok" width={24} height={24} />
      </div>
      <div className=" relative">
        <div
          className=" absolute -bottom-16 
         px-5 py-2 
        text-blue-500 text-4xl font-extrabold"
        >
          <Link href={"/"} className={cinzel.className}>
            Ali'sBlog.
          </Link>
        </div>
      </div>
      <div className=" hidden md:flex flex-row justify-center items-center gap-2">
        <Link href={"/"}>homepage</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/contact"}>contact</Link>
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
