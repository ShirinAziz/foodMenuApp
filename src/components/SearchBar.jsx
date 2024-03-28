import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate(`search?result=${userInput}`);
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit} className="w-full lg:w-[500px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a meal.."
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
              className={`bg-black border border-gray-800
          text-md rounded-full focus:ring-1 focus:ring-slate-800 focus:border-slate-800 block
          sm:w-full p-2.5 outline-none px-5 placeholder:text-sm shadow-xl`}
            />
            <BiSearchAlt2 className="absolute top-3 right-5 text-xl" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
