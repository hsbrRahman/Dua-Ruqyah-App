"use client";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  // const router = useRouter();
  // const params = useParams();
  useEffect(() => {
    const getCategory = async () => {
      const res = await fetch(`http://localhost:8000/category/`);
      const data = await res.json();
      setCategories([...data]);
    };
    getCategory();
  }, []);
  // const goToCategory = (id) => {
  //   router.push(`/${id}`);
  // };
  return (
    <div className="w-1/3 h-4/6 bg-white flex flex-col ">
      <div className="w-full h-[8%] bg-green">
        <div className="flex justify-center items-center h-full">
          <p className="text-xl text-white font-semibold">Categories</p>
        </div>
      </div>
      <div className="max-w-md h-[7%] mx-auto my-4">
        {/* <input type="text" /> */}
        <div className="relative flex items-center w-[99%] h-full rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <input
            className="peer h-full w-full outline-none text-xl text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search by Categories"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-evenly h-full gap-2 ">
        {categories.map((category) => (
          <CategoryCard
            id={category.id}
            cat_id={category.cat_id}
            cat_name_en={category.cat_name_en}
            no_of_dua={category.no_of_dua}
            key={category.id}
            // goToCategory={goToCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
