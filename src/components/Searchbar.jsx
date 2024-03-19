import React, { useState } from "react";
import Loading from "./Loading";
import { BiSearchAlt2 } from "react-icons/bi";

const Searchbar = () => {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [searchResultData, setSearchResultData] = useState(null); // Använd en separat tillståndsvariabel för att lagra API-svar

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`
      );
      const data = await response.json();
      setSearchResultData(data); // Uppdatera tillståndet för API-svar
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Återställ laddningstillståndet när fetch-förfrågan är klar
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form onSubmit={handleSubmit} className="w-full lg:w-2/4">
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

        {searchResultData && (
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 px-0 lg:px-10 py-10">
            {searchResult.meals.map((meal) => {
              return (
                <div key={meal.idMeal}>
                  <div className="w-full">
                    <img
                      src={meal.strMealThumb}
                      alt=""
                      className="rounded-lg h-[200px] md:h-[150px] w-full p-3"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{meal.strMeal}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Searchbar;
