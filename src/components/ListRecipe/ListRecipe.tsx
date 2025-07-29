import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import type { AppDispatch } from "../../redux/store";
import { fetchRecipe } from "../../redux/recipe/recipeOperations";
import { selectRecipeState } from "../../redux/recipe/recipeSelectors";
import { setPage } from "../../redux/recipe/recipeSlice";
import Pagination from "../Pagination/Pagination";
import CardRecipe from "../CardRecipe/CardRecipe";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

const ITEMS_PER_PAGE = 8;

export default function ListRecipe() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const { meals, status, currentPage, error } = useSelector(selectRecipeState);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageFromURL = searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1;
    dispatch(setPage(pageFromURL));

    dispatch(fetchRecipe({ category: "", search: "" }));
  }, [dispatch, location.search]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const currentPageInURL = Number(searchParams.get("page"));

    if (currentPageInURL !== currentPage) {
      searchParams.set("page", String(currentPage));
      navigate(`?${searchParams.toString()}`);
    }
  }, [currentPage, navigate, location.search]);

  if (status === "loading") {
    return <SkeletonLoader />;
  }

  if (status === "failed") {
    return (
      <div className="text-red-400 text-center text-lg py-10">
        Error loading recipes: {error}
      </div>
    );
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMeals = meals.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(meals.length / ITEMS_PER_PAGE);

  return (
    <div
      className="container mx-auto px-4
                       sm:px-6
                       md:px-3
                       lg:px-12
                       xl:px-0
                       2xl:px-10
                       py-2"
    >
      <ul
        className="grid grid-cols-1 gap-5 justify-items-center p-5 rounded-lg
                       sm:grid-cols-1
                       md:grid-cols-2
                       lg:grid-cols-3
                       xl:grid-cols-4
                       2xl:grid-cols-4"
      >
        {meals.length === 0 && status === "succeeded" ? (
          <li className="col-span-full text-gray-500 text-center text-lg py-10">
            No recipes found for your search. Please try a different query.
          </li>
        ) : (
          currentMeals.map((meal) => (
            <li key={meal.idMeal}>
              <CardRecipe meal={meal} />
            </li>
          ))
        )}
      </ul>
      {totalPages > 1 && meals.length > 0 && (
        <Pagination totalPages={totalPages} />
      )}
    </div>
  );
}
