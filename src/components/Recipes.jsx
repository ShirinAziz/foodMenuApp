import React, { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import Loading from "./Loading";
import Searchbar from "./Searchbar";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("Vegan");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  {
    /* useEffect(async () => {
    const response = await fetch(
      "www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();
    console.log(data);
  }, []);*/
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10">
        <form className="w-full lg:w-2/4">
          <Searchbar
            placeholder="eg, Cake, Vegan, Chicken"
            handleInputChange={handleChange}
            rightIcon={<BiSearchAlt2 />}
          />
        </form>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className="w-full flex  flex-wrap gap-10 px-0 lg:px-10 py-10">
            {recipes?.map((item, index) => (
              <RecipeCard recipes={recipes} key={index} />
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
