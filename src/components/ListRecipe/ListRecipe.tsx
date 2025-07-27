// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";
// import type { AppDispatch } from "../../redux/store";
// import { fetchRecipe } from "../../redux/recipe/recipeOperations";
// import { selectRecipeState } from "../../redux/recipe/recipeSelectors";
// import { setPage } from "../../redux/recipe/recipeSlice";
// import Pagination from "../Pagination/Pagination";
// import CardRecipe from "../CardRecipe/CardRecipe";
// import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

// const ITEMS_PER_PAGE = 6;

// export default function ListRecipe() {
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { meals, status, currentPage } = useSelector(selectRecipeState);

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const pageFromURL = searchParams.get("page")
//       ? Number(searchParams.get("page"))
//       : 1;

//     if (pageFromURL !== currentPage) {
//       dispatch(setPage(pageFromURL));
//     } else {
//       const currentPageInURL = Number(searchParams.get("page"));
//       if (currentPageInURL !== currentPage) {
//         searchParams.set("page", String(currentPage));
//         navigate(`?${searchParams.toString()}`);
//       }
//     }

//     dispatch(fetchRecipe({ category: "", search: "" }));
//   }, [dispatch, location.search, navigate, currentPage]);

//   if (!meals) {
//     return <SkeletonLoader />;
//   }

//   if (status === "loading") {
//     return <SkeletonLoader />;
//   }

//   if (status === "failed") {
//     return <div>Error loading recipes</div>;
//   }

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentMeals = meals.slice(startIndex, startIndex + ITEMS_PER_PAGE);
//   const totalPages = Math.ceil(meals.length / ITEMS_PER_PAGE);

//   return (
//     <div
//       className="container mx-auto px-4
//                  sm:px-6
//                  md:px-8
//                  lg:px-12
//                  xl:px-16
//                  2xl:px-20
//                  py-4"
//     >
//       <ul
//         className="grid grid-cols-1 gap-5 justify-items-center p-5 rounded-lg
//                    sm:grid-cols-1
//                    md:grid-cols-2
//                    lg:grid-cols-3
//                    xl:grid-cols-4
//                    2xl:grid-cols-6"
//       >
//         {currentMeals.length > 0 ? (
//           currentMeals.map((meal) => (
//             <li key={meal.idMeal} className="">
//               <CardRecipe meal={meal} />
//             </li>
//           ))
//         ) : (
//           <li className="col-span-full text-red-600 text-center text-lg py-10">
//             Recipe not found
//           </li>
//         )}
//       </ul>
//       {totalPages > 1 && <Pagination totalPages={totalPages} />}
//     </div>
//   );
// }
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
      <div className="text-red-600 text-center text-lg py-10">
        Помилка завантаження рецептів: {error}
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
                   md:px-8
                   lg:px-12
                   xl:px-16
                   2xl:px-20
                   py-4"
    >
      <ul
        className="grid grid-cols-1 gap-5 justify-items-center p-5 rounded-lg
                    sm:grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    2xl:grid-cols-6"
      >
        {meals.length === 0 && status === "succeeded" ? (
          <li className="col-span-full text-gray-500 text-center text-lg py-10">
            Рецепти не знайдено за вашим запитом. Спробуйте інший пошук.
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
