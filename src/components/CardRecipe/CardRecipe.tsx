import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { Meal } from "../../type";
import { FaHeart } from "react-icons/fa6";
import { CiTrash } from "react-icons/ci";
import { selectFavorites } from "../../redux/recipe/recipeSelectors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/recipe/recipeSlice";

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
      <div className="flex flex-col items-center w-full mb-4">
        <div className="flex  w-full gap-3 text-xs font-medium text-gray-600/50 mb-1  md:text-sm">
          <p className="truncate-single-line">Area: {areaName}</p>
          <p className="truncate-single-line">Category: {categoryName}</p>
        </div>
        <h3 className="item-title w-full truncate-single-line text-gray-600 md:text-lg">
          {mealName}
        </h3>
      </div>
      <div className="flex items-center w-full  mt-auto">
        <Link
          to={`/recipe/${idMeal}`}
          className="learn-more-btn hover:bg-[#93ae7f]"
        >
          <button type="button">Show Recipe</button>
        </Link>

        <button
          className={`favorite-btn ml-auto w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 ease-in-out
                     ${
                       isFavorite
                         ? "bg-[#a4be92]  hover:bg-[#93ae7f]"
                         : "  bg-[#a4be92] hover:bg-[#93ae7f]"
                     }`}
          onClick={handleToggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <CiTrash color="#000000" className="w-5 h-5" />
          ) : (
            <FaHeart color="#f5f5dc" className="w-5 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}
