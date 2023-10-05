import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };
  return (
    <div className="flex  items-center h-10   w-full ">
      <input
        type="text"
        placeholder="ابحث هنا..."
        className=" focus:outline-none h-full  border-purple-800 border w-[100%] px-2 py-1 rounded-r-lg"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <span className=" border-purple-500  bg-purple-500 h-full  flex items-center  px-2  rounded-l-md ">
        <HiMagnifyingGlass className="text-white text-2xl mx-2 cursor-pointer" />
      </span>
    </div>
  );
};
export default SearchComponent;
