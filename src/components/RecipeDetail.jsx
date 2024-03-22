import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const [loading, setLoading] = useState(true);
  const [recipeData, setRecipeData] = useState({});
  const { recipeId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responsdData = await response.json();
        setRecipeData(responsdData);
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
    <div>
      {recipeData.meals.map((item) => {
        return (
          <div key={item.idMeal} className="flex flex-col gap-8">
            <div className="h-[100px]"></div>

            <div className="flex flex-col gap-4 items-center px-10">
              <h1 className="font-bold text-2xl sm:text-6xl">{item.strMeal}</h1>
              <div className="flex gap-4">
                <p
                  className="py-1 px-2 bg-[#0c452243] shadow-xl rounded-full 
           text-green-500"
                >
                  {item.strCategory}
                </p>
                <p
                  className="py-1 px-2 bg-[#0c452243] shadow-xl rounded-full 
           text-green-500"
                >
                  {item.strArea}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row sm:items-center">
              <div className="px-10 lg:px-20">
                <img
                  src={item.strMealThumb}
                  alt=""
                  className="h-[400px] w-[350px] sm:h-[500px] sm:w-[400px] rounded-3xl"
                />
              </div>

              <div className="px-10 sm:px-0">
                <h2 className="text-xl sm:text-2xl text-green-500">
                  Ingridients
                </h2>
                <div className="px-4 mt-4">
                  <div className="flex gap-2">
                    <p> {item.strMeasure1}</p>
                    <p>{item.strIngredient1}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure2}</p>
                    <p>{item.strIngredient2}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure3}</p>
                    <p>{item.strIngredient3}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure4}</p>
                    <p>{item.strIngredient4}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure5}</p>
                    <p>{item.strIngredient5}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure6}</p>
                    <p>{item.strIngredient6}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure7}</p>
                    <p>{item.strIngredient7}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure8}</p>
                    <p>{item.strIngredient8}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure9}</p>
                    <p>{item.strIngredient9}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure10}</p>
                    <p>{item.strIngredient10}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure11}</p>
                    <p>{item.strIngredient11}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure12}</p>
                    <p>{item.strIngredient12}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure13}</p>
                    <p>{item.strIngredient13}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure14}</p>
                    <p>{item.strIngredient14}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure15}</p>
                    <p>{item.strIngredient15}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure16}</p>
                    <p>{item.strIngredient16}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure17}</p>
                    <p>{item.strIngredient17}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure18}</p>
                    <p>{item.strIngredient18}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure19}</p>
                    <p>{item.strIngredient19}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.strMeasure20}</p>
                    <p>{item.strIngredient20}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-10 lg:px-20">
              <h2 className="text-xl sm:text-2xl text-green-500">
                Instructions
              </h2>
              <p className="px-4 mt-8 whitespace-pre-line">
                {item.strInstructions}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeDetail;
