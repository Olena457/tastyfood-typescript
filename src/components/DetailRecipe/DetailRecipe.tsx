import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../../redux/recipe/recipeOperations";
import { selectRecipeState } from "../../redux/recipe/recipeSelectors";
import type { Meal } from "../../type";

export default function DetailRecipe() {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>();
  const { recipe, status, error } = useSelector(selectRecipeState);

  useEffect(() => {
    if (id) {
      dispatch(fetchRecipeById(id));
    }
  }, [dispatch, id]);

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg text-gray-700">
        Loading...
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center text-red-600 p-8">
        Error: {error || "Unknown error loading recipe."}
      </div>
    );
  }

  if (!recipe || Object.keys(recipe).length === 0) {
    return (
      <div className="text-center text-gray-500 p-8">No recipe found.</div>
    );
  }

  const ingredientNames: string[] = [];
  const ingredientMeasures: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}` as keyof Meal;
    const measureKey = `strMeasure${i}` as keyof Meal;
    const ingredient = recipe[ingredientKey]?.trim();
    const measure = recipe[measureKey]?.trim();

    if (ingredient && measure && ingredient !== "" && measure !== "") {
      ingredientNames.push(ingredient);
      ingredientMeasures.push(measure);
    }
  }

  const combinedIngredients: string[] = [];
  for (let i = 0; i < ingredientNames.length; i++) {
    combinedIngredients.push(`${ingredientMeasures[i]} ${ingredientNames[i]}`);
  }

  return (
    <div
      className="container mx-auto px-4 py-8
                 sm:px-6
                 md:px-8
                 lg:px-12
                 xl:px-16
                 2xl:px-20"
    >
      <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
        <div className="md:w-1/2">
          <img
            className="w-full h-64 object-cover object-center md:h-full"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
        </div>

        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-semibold">Area:</span> {recipe.strArea}
            </p>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {recipe.strMeal}
            </h1>
            <p className="text-base text-gray-600 mb-1">
              <span className="font-semibold">Category:</span>{" "}
              {recipe.strCategory}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <span className="font-semibold">Tags:</span>{" "}
              {recipe.strTags || "No tags available"}
            </p>
          </div>

          {recipe.strYoutube && (
            <a
              className="mt-4 inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Recipe
            </a>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          Add to Favorites
        </button>
      </div>

      <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Instructions:</h2>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {recipe.strInstructions}
        </div>
      </div>

      <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ingredients:</h2>
        <ul className="space-y-2">
          {combinedIngredients.length > 0 ? (
            combinedIngredients.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-baseline border-b border-gray-200 pb-1"
              >
                <span className="text-base text-gray-800">{item}</span>
              </li>
            ))
          ) : (
            <p className="text-gray-500 italic">No ingredients available</p>
          )}
        </ul>
      </div>
    </div>
  );
}
