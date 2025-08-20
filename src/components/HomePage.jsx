
import React, { useState, useEffect } from "react";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data); // load recipes from data.json
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:scale-105 transition p-4"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-40 object-cover rounded-lg"
          />
           
          <h2 className="text-xl font-semibold mt-3">{recipe.title}</h2>
          <p className="text-gray-600 mt-1">{recipe.summary}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
