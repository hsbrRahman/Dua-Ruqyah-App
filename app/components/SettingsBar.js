import Image from "next/image";
import React from "react";

const SettingsBar = () => {
  return (
    <div className=" h-full flex flex-col justify-center rounded-xl">
      <div className=" h-5 flex bg-[#f7f8fa]">
        <div className=" w-4/5 items-center flex flex-row"></div>
        <div className="w-1/5 relative flex flex-row items-center">
          <div className="h-3/4 w-full relative ">
            <Image
              src={"/images/user-icon.png"}
              // height={50}
              // width={40}
              fill={true}
              alt="user-icon"
            />
          </div>
        </div>
      </div>
      <div className=" h-2/3">
        <div className=" h-4/5 ">
          <div className="h-4/5 w-full flex flex-col items-center font-semibold  gap-4 ">
            <div className="h-3/6  w-full flex justify-center items-center">
              <p className="text-3xl">Settings</p>
            </div>
            <div className=" w-full h-2/6 relative">
              <Image
                src={"/images/language settings.png"}
                fill={true}
                alt="language settings"
              />
            </div>
            <div className=" w-full h-2/6 relative">
              <Image
                src={"/images/General Settings.png"}
                fill={true}
                alt="general settings"
              />
            </div>
            <div className=" w-full h-2/6 relative">
              <Image
                src={"/images/Font Settings.png"}
                fill={true}
                alt="font settings"
              />
            </div>
            <div className=" w-full h-[99%] relative">
              <Image
                src={"/images/Appearance.png"}
                fill={true}
                alt="appearance settings"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/3 bg-[#f7f8fa]"></div>
    </div>
  );
};

export default SettingsBar;
