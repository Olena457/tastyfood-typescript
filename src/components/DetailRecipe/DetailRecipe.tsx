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

  return (
    <div className="flex flex-col items-start rounded-2xl border border-gray-300 bg-white shadow-lg p-6 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start w-full mb-6 gap-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5 w-full md:w-auto">
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="max-w-xs h-48 object-cover rounded-2xl flex-shrink-0 mx-auto md:w-[200px] md:h-[200px] md:mx-0"
          />
          <div className="w-full text-center md:text-left mt-4 md:mt-0">
            <p className="font-normal text-sm leading-relaxed text-gray-800 pb-2">
              Area: {recipe.strArea}
            </p>
            <h3 className="font-semibold text-2xl leading-[133%] text-gray-900 pb-3">
              {recipe.strMeal}
            </h3>
            <p className="font-normal text-base leading-relaxed text-gray-800 pb-2">
              Category: {recipe.strCategory}
            </p>
            <p className="font-normal text-base leading-relaxed text-gray-800 pb-4">
              Tags: {recipe.strTags || "No tags available"}
            </p>
            {recipe.strYoutube && (
              <a
                href={recipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-base leading-relaxed text-gray-900 no-underline hover:underline focus:underline block md:inline-block mt-4"
              >
                Watch video
              </a>
            )}
          </div>
        </div>
        <button
          type="button"
          className="w-full md:w-[200px] h-10 rounded-4xl border border-gray-500 bg-blue-500  text-amber-50   cursor-pointer transition-colors duration-200 ease-in-out hover:bg-gray-300 hover:text-black focus:bg-gray-400 focus:text-black mt-6 md:mt-0"
        >
          Add to Favorite
        </button>
      </div>

      <div className="mt-8 w-full">
        <h4 className="font-semibold text-lg leading-relaxed text-gray-900 pb-3">
          Instructions:
        </h4>
        <p className="font-normal text-base leading-relaxed text-gray-800 pb-4 whitespace-pre-line">
          {recipe.strInstructions}
        </p>
      </div>

      <div className="mt-8 w-full">
        <h4 className="font-semibold text-lg leading-relaxed text-gray-900 pb-3">
          Ingredients:
        </h4>
        <ul>
          {ingredientNames.length > 0 ? (
            ingredientNames.map((ingredient, index) => (
              <li
                key={index}
                className="flex justify-between w-full max-w-md font-normal text-base leading-relaxed text-gray-800 pt-[5px] border-b border-dashed border-gray-800"
              >
                <span>{ingredient}</span>
                <span>{ingredientMeasures[index]}</span>
              </li>
            ))
          ) : (
            <p className="font-normal text-base leading-relaxed text-gray-800 pb-[15px]">
              No ingredients available
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}
