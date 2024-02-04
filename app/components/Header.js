import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-full h-5">
      <div className="flex justify-between h-full items-center text-xl">
        <div>
          <p className="text-center text-2xl font-bold">Dua Page</p>
        </div>
        <div className="bg-white  flex flex-row justify-between h-2/4 w-1/4">
          {/* Here, the search field is made using simple divs because it is static and just UI has to be made.
          Otherwise, it would have been made using appropriate semantic elements like input, etc */}
          <div className="w-10/12 items-center flex flex-row">
            Search By Dua Name
          </div>
          <div className="w-2/12  relative">
            <Image
              src="/images/searchframe.png"
              // height={60}
              // width={30}
              fill={true}
              alt="search-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
