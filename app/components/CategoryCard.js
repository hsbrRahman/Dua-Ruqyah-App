import React from "react";
// import { useParams } from "next/navigation";

const CategoryCard = ({ id, cat_id, cat_name_en, no_of_dua, goToCategory }) => {
  // const [category, setCategory] = useState({});
  // const params = useParams();
  {
    // useEffect(() => {
    //   const getCategory = async () => {
    //     const res = await fetch("http://localhost:8000/category/");
    //     const data = await res.json();
    //     // console.log(data);
    //     setCategory(...data);
    //   };
    //   getCategory();
    // }, []);
    return (
      <div className="w-full h-[10%] bg-[#E8F0F5] flex flex-row justify-center items-center text-2xl ">
        <div className="flex flex-row justify-between w-full">
          {/* <button onClick={() => goToCategory(cat_id)}> */}
          <div>{cat_name_en}</div> <div>Duas: {no_of_dua}</div>
          {/* </button> */}
        </div>
      </div>
    );
  }
  S;
};
export default CategoryCard;
