import React from "react";
import Categories from "./components/Categories";
import Dua from "./components/Dua";

const Page = () => {
  return (
    // <div className="bg-[#f7f8fa] w-full h-screen overflow-hidden grid grid-cols-18 gap-4 p-4">
    //   <div className=" col-span-1 ">
    //     <Navbar />
    //   </div>
    //   <div className=" col-span-13 ">
    //     <div className=" grid grid-cols-6 h-full gap-4 ">
    //       <h2 className="bg-white col-span-2 text-cyan-900">testing 2</h2>
    //       <h2 className="bg-white col-span-4 text-red-600">testing 3</h2>
    //     </div>
    //   </div>
    //   <h2 className="bg-white col-span-4">testing 4</h2>
    // </div>
    <div className="h-screen">
      <div className="w-full flex flex-row h-full gap-4">
        <Categories />
        <div className="w-2/3">
          <Dua />
        </div>
      </div>
    </div>
  );
};

export default Page;
