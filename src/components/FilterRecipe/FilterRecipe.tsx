import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { selectCategories } from "../../redux/recipe/recipeSelectors";
import {
  fetchCategories,
  fetchRecipe,
} from "../../redux/recipe/recipeOperations";

export default function FilterRecipe() {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryChange = (category: string) => {
    dispatch(fetchRecipe({ category }));
  };

  return (
    <div
      className="w-full lg:w-auto lg:flex-shrink-0 
    "
    >
      <label
        htmlFor="category-select"
        className="bg-[var(--color-main-color)] sr-only"
      >
        Choose a category...
      </label>
      <select
        id="category-select"
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="border bg-yellow-50 border-gray-400 text-emerald-800  rounded-lg p-2 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full lg:w-[200px]"
      >
        <option value=" ">Choose a category...</option>
        {categories &&
          categories.length > 0 &&
          categories?.map((category) => (
            <option key={category.idCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
      </select>
    </div>
  );
}
