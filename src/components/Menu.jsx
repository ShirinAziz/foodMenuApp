import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Link, useParams } from "react-router-dom";

// 1: läsa categorynamn från länk, 2:

const Menu = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const { categoryName } = useParams();

  console.log(categoryName);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responsdData = await response.json();
        setData(responsdData);
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
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 px-0 lg:px-10 py-10">
        {data.meals.map((item) => {
          return (
            <Link to={`/recipedetail/${item.idMeal}`} key={item.idMeal}>
              <div className="w-full">
                <img
                  src={item.strMealThumb}
                  alt=""
                  className="rounded-lg  h-[200px] md:h-[150px] w-full p-3"
                />
              </div>
              <div className="p-3">
                <p className="font-semibold">{item.strMeal}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
