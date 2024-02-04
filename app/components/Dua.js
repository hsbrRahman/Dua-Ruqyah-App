"use client";

import React, { useEffect, useState } from "react";
import DuaCard from "./DuaCard";
import { useParams } from "next/navigation";
const Dua = () => {
  //   const params = useParams();
  const [duas, setDuas] = useState([]);
  useEffect(() => {
    const getDua = async () => {
      const res = await fetch("http://localhost:8000/dua/1");
      const data = await res.json();
      //   console.log(data[1]);
      setDuas([...data]);
    };
    getDua();
  }, []);
  return (
    <div className="w-full flex flex-col h-full gap-6">
      {duas.map((dua) => (
        <DuaCard
          top_en={dua.top_en}
          key={dua.id}
          dua_name_en={dua.dua_name_en}
          refference_en={dua.refference_en}
        />
      ))}
    </div>
  );
};

export default Dua;
