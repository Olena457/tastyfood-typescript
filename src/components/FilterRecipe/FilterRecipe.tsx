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
    <div>
      <label htmlFor="category-select">Choose a category:</label>
      <select
        id="category-select"
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full md:w-1/3"
      >
        <option value="">Please choose an option</option>
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
