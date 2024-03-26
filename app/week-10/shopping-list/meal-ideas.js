"use client";
import { useState, useEffect } from "react";


const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
  
    const loadMealIdeas = async () => {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas || []);
    };

    
//I copied some portion from "Using useEffect with fetch" from "https://webdev2.warsylewicz.ca/week-7/fetching-data"
const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) throw new Error("Problem fetching data");
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.error("Error:", error);
  }
};

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-800">
        Meal Ideas
      </h2>
      {meals.length > 0 ? (
        <ul className="flex flex-wrap justify-center gap-4">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="border p-2 rounded-md bg-blue-300 shadow text-blue-800 cursor-pointer text-center flex flex-col items-center justify-center w-48 mt-5"
            >
              <div className="text-lg font-bold">{meal.strMeal}</div>
              <img
                src={meal.strMealThumb}
                alt={`Image of ${meal.strMeal}`}
                className="mt-2 w-32 h-32 object-cover rounded-md"
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="border p-2 rounded-md bg-blue-300 shadow text-blue-800 cursor-pointer text-center flex flex-col items-center justify-center mt-5">
          There are no meal ideas for "{ingredient}".
        </div>
      )}
    </div>
  );
};

export default MealIdeas;
