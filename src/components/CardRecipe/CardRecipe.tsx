import { Link } from "react-router-dom";
import type { Meal } from "../../type";
// import { FaHeart } from "react-icons/fa";
interface CardRecipeProps {
  meal: Meal;
}

export default function CardRecipe({ meal }: CardRecipeProps) {
  const { idMeal, strMeal, strMealThumb, strArea, strCategory } = meal;
  const mealName = strMeal?.trim() || "Tasty Food";
  const categoryName = strCategory?.trim() || "World Cuisine";
  const areaName = strArea?.trim() || "World Recipes";

  return (
    <div
      className="item-card
                 p-5 md:px-[15px] md:py-[25px] xl:p-6"
    >
      <img src={strMealThumb} alt={mealName} className="item-image" />
      <div className="flex flex-col items-start w-full mb-4">
        <div className="flex gap-3 text-xs font-medium text-gray-600/50 mb-1 md:text-sm">
          <p>Area: {areaName}</p>
          <p>Category: {categoryName}</p>
        </div>
        <h3 className="item-title md:text-lg">{mealName}</h3>
      </div>

      <div className="flex items-center w-full mt-auto">
        <Link to={`/recipe/${idMeal}`} className="learn-more-btn">
          <button type="button">Show Recipe</button>
        </Link>
        <button className="favorite-btn">
          {/* <FaHeart className="w-4 h-4" /> */}
        </button>
      </div>
    </div>
  );
}
