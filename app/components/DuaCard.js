import Image from "next/image";
import React from "react";

const DuaCard = ({ top_en, dua_name_en, refference_en }) => {
  return (
    <div className="h-[25%] flex flex-col bg-white gap-6">
      <div className="text-green text-xl flex flex-row gap-4">
        <Image
          src={"/images/a-icon (Traced).png"}
          height={30}
          width={30}
          alt="A-icon"
        />
        {dua_name_en}
      </div>
      <div className="text-2xl">{top_en}</div>
      <div className=" text-xl flex flex-col">
        <div className="text-green">Reference:</div>
        <div>{refference_en}</div>
      </div>
    </div>
  );
};

export default DuaCard;
