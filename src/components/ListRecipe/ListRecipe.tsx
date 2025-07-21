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

const ITEMS_PER_PAGE = 6;

export default function ListRecipe() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const { meals, status, currentPage } = useSelector(selectRecipeState);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageFromURL = searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1;

    if (pageFromURL !== currentPage) {
      dispatch(setPage(pageFromURL));
    } else {
      const currentPageInURL = Number(searchParams.get("page"));
      if (currentPageInURL !== currentPage) {
        searchParams.set("page", String(currentPage));
        navigate(`?${searchParams.toString()}`);
      }
    }

    dispatch(fetchRecipe({ category: "", search: "" }));
  }, [dispatch, location.search, navigate, currentPage]);

  if (!meals) {
    return <SkeletonLoader />;
  }

  if (status === "loading") {
    return <SkeletonLoader />;
  }

  if (status === "failed") {
    return <div>Помилка завантаження рецептів</div>;
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMeals = meals.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(meals.length / ITEMS_PER_PAGE);

  return (
    <div className="">
      <ul className="">
        {currentMeals.length > 0 ? (
          currentMeals.map((meal) => (
            <li key={meal.idMeal} className="">
              <CardRecipe meal={meal} />
            </li>
          ))
        ) : (
          <li className="">Рецептів не знайдено</li>
        )}
      </ul>
      {totalPages > 1 && <Pagination totalPages={totalPages} />}
    </div>
  );
}
