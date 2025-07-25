import { Link } from "react-router-dom";
import type { Meal } from "../../type";
// import { FaHeart, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/recipe/recipeSlice";
import { selectFavorites } from "../../redux/recipe/recipeSelectors";

interface CardRecipeProps {
  meal: Meal;
}

export default function CardRecipe({ meal }: CardRecipeProps) {
  const { idMeal, strMeal, strMealThumb, strArea, strCategory } = meal;
  const mealName = strMeal?.trim() || "Tasty Food";
  const categoryName = strCategory?.trim() || "World Cuisine";
  const areaName = strArea?.trim() || "World Recipes";

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some((favMeal) => favMeal.idMeal === idMeal);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(idMeal));
    } else {
      dispatch(addToFavorites(meal));
    }
  };

  return (
    <div className="item-card p-5 md:px-[15px] md:py-[25px] xl:p-6">
      <img src={strMealThumb} alt={mealName} className="item-image" />
      <div className="flex flex-col items-start w-full mb-4">
        <div className="flex gap-3 text-xs font-medium text-gray-600/50 mb-1 md:text-sm">
          <p>Area: {areaName}</p>
          <p>Category: {categoryName}</p>
        </div>
        <h3 className="item-title  text-gray-600 md:text-lg">{mealName}</h3>
      </div>
      <div className="flex items-center w-full mt-auto">
        <Link to={`/recipe/${idMeal}`} className="learn-more-btn">
          <button type="button">Show Recipe</button>
        </Link>

        <button
          className={`favorite-btn ml-auto w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out
                     ${
                       isFavorite
                         ? "bg-green-300 text-red-400 hover:bg-red-300"
                         : "bg-green-300 text-gray-500 hover:bg-green-400"
                     }`}
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? "🚯" : "💛"}
        </button>
      </div>
    </div>
  );
}
// <FaHeart className="w-5 h-5" />
// <FaTrash className="w-5 h-5" />
