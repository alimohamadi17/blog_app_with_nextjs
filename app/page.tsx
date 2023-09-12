import Image from "next/image";
import Featured from "./components/Featured";
import Category from "./components/Category";
import CartList from "./components/CartList";
import Pagination from "./components/Pagination";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <main className=" min-h-screen xl:ml-20 xl:mr-20 md:ml-10 md:mr-10 sm:m-0 p-5 ">
      <Featured />
      <Category />
      <div className="flex gap-5">
        <CartList />
        <Menu />
      </div>
    </main>
  );
}
