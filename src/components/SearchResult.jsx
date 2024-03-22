import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "./Loading";

const SearchResult = () => {
  const [searchParams] = useSearchParams();
  const userInput = searchParams.get("result");
  const [loading, setLoading] = useState(false);
  const [searchResultData, setSearchResultData] = useState(null); // Använd en separat tillståndsvariabel för att lagra API-svar

  useEffect(() => {
    const fetchData = async () => {
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
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="h-[100px]"></div>
      {searchResultData && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 px-0 lg:px-10 py-10">
          {searchResultData.meals.map((meal) => {
            return (
              <Link to={`/recipedetail/${meal.idMeal}`} key={meal.idMeal}>
                <div>
                  <div className="w-full">
                    <img
                      src={meal.strMealThumb}
                      alt=""
                      className="rounded-3xl h-[200px] md:h-[150px] w-full p-3"
                    />
                  </div>
                  <div className="p-3">
                    <p className="font-semibold">{meal.strMeal}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
