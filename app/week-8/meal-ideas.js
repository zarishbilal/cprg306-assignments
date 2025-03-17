"use client";
import { useState, useEffect } from "react";

// Fetch meal ideas from TheMealDB API
const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (ingredient) {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-4">Meal Ideas</h2>
      {meals.length > 0 ? (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700 transition"
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No meal ideas</p>
      )}
    </div>
  );
};

export default MealIdeas;
