import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRecipeById } from "../../redux/recipe/recipeOperations";
import { selectRecipeState } from "../../redux/recipe/recipeSelectors";
import type { Meal } from "../../type";
import { FaYoutube } from "react-icons/fa";

export default function DetailRecipe() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { recipe, status, error } = useSelector(selectRecipeState);

  useEffect(() => {
    if (id) {
      dispatch(fetchRecipeById(id));
    }
  }, [dispatch, id]);

  const handleGoBack = () => {
    navigate(-1);
  };

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
    <div className="flex flex-col items-center rounded-2xl border border-gray-300 bg-white shadow-lg p-6 w-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between w-full mb-6">
        <div>
          <h3 className="font-semibold text-2xl leading-[133%] text-gray-900 pb-2">
            {recipe.strMeal}
          </h3>
          {recipe.strYoutube && (
            <a
              href={recipe.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-base leading-relaxed text-red-400 no-underline hover:underline focus:underline block md:inline-block"
            >
              Watch video
              <FaYoutube color="red" />
            </a>
          )}
        </div>
        <button
          type="button"
          onClick={handleGoBack}
          className="w-full md:w-[200px] h-10 rounded-4xl border border-gray-500 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:bg-gray-300 mt-4 md:mt-0 md:ml-4"
        >
          Go Back
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-start w-full gap-6">
        <div
          className="flex flex-col flex-shrink-0 mx-auto md:mx-0
                        md:w-[200px] lg:w-[300px] xl:w-[400px]"
        >
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full aspect-square object-cover rounded-2xl"
          />

          <div className="w-full mt-6">
            <h4 className="font-semibold text-lg leading-relaxed text-gray-900 pb-3">
              Ingredients:
            </h4>
            <ul>
              {ingredientNames.length > 0 ? (
                ingredientNames.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex justify-between w-full font-normal text-base leading-relaxed text-gray-800 pt-[5px] border-b border-dashed border-gray-800"
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

        <div className="flex flex-col w-full">
          <div className="w-full mt-4 md:mt-0">
            <h4 className="font-semibold text-lg leading-relaxed text-gray-900 pb-3">
              Instructions:
            </h4>
            <p className="font-normal text-base leading-relaxed text-gray-800 pb-4 whitespace-pre-line">
              {recipe.strInstructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
