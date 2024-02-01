import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-between h-2/3 rounded-xl border-2 border-red-600">
      <div className="h-1/4 pt-4">
        <Image
          src="/images/f49d5cb63d9a02588cddba5d7357d8ab.png"
          height={90}
          width={90}
          alt="logo"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-between  h-3/4">
        <Image
          src="/images/Frame 545.png"
          height={30}
          width={40}
          alt="navbar icons"
        />
        <Image
          src="/images/I want to support.png"
          height={100}
          width={100}
          alt="support icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
