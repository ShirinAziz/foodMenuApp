import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const [loading, setLoading] = useState(true);
  const [recipeData, setRecipeData] = useState();
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

  return <div>RecipeDetail</div>;
};

export default RecipeDetail;
