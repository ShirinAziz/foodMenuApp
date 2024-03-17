import React, { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import Loading from "./Loading";
import Searchbar from "./Searchbar";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipeCategory, setRecipeCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setRecipeCategory(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4">
          <Searchbar
            placeholder="Cake, Chicken, Beef"
            rightIcon={<BiSearchAlt2 />}
          />
        </form>
      </div>
      {recipeCategory?.categories.length > 0 ? (
        <>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 px-0 lg:px-10 py-10">
            {recipeCategory?.categories.map((item) => (
              <Link
                to={`/menu/${item.strCategory}`}
                key={item.idCategory}
                className="w-ful"
              >
                <div className="w-full">
                  <img
                    src={item.strCategoryThumb}
                    alt={item.strCategory}
                    className="rounded-lg  h-[200px] md:h-[150px] w-full p-3"
                  />
                  <div className="p-3">
                    <p className="font-semibold">{item.strCategory}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full items-center justify-center py-10">
          <p className="text-center">No recipe Found</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
