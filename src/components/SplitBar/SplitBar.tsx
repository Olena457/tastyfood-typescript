import FilterRecipe from "../FilterRecipe/FilterRecipe";
import SearchRecipe from "../SearchRecipe/SearchRecipe";

export default function SplitBar() {
  return (
    <div className="flex">
      <SearchRecipe />
      <FilterRecipe />
    </div>
  );
}
