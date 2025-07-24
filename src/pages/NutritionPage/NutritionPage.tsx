import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchForm from "../../components/SearchForm/SearchForm";
import NutritionCard from "../../components/NutritionCard/NutritionCard";
import { fetchNutritionByQuery } from "../../redux/nutrition/nutritionOperations";
import {
  selectNutritionData,
  selectNutritionStatus,
  selectNutritionError,
  selectNutritionSearchQuery,
} from "../../redux/nutrition/nutritionSelectors";
import {
  setNutritionSearchQuery,
  clearNutritionData,
} from "../../redux/nutrition/nutritionSlice";
import type { AppDispatch } from "../../redux/store";

const NutritionPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const nutritionData = useSelector(selectNutritionData);
  const status = useSelector(selectNutritionStatus);
  const error = useSelector(selectNutritionError);
  const searchQuery = useSelector(selectNutritionSearchQuery);

  useEffect(() => {
    return () => {
      dispatch(clearNutritionData());
      dispatch(setNutritionSearchQuery(""));
    };
  }, [dispatch]);

  const handleSearchTermChange = useCallback(
    (term: string) => {
      dispatch(setNutritionSearchQuery(term));
    },
    [dispatch]
  );

  const handleSearchSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        dispatch(fetchNutritionByQuery({ query: searchQuery }));
      }
    },
    [dispatch, searchQuery]
  );

  return (
    <div className="p-5 max-w-4xl mx-auto font-sans">
      <h1 className="bg-yellow-200 border border-amber-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-4 py-2  rounded">
        Nutrition Information
      </h1>
      <div className="flex justify-start w-full mt-2">
        <SearchForm
          searchTerm={searchQuery}
          onSearchTermChange={handleSearchTermChange}
          onSearchSubmit={handleSearchSubmit}
          placeholder="Enter food item..."
        />
      </div>
      {status === "loading" && (
        <p className="text-center text-lg text-gray-600">
          Loading nutrition data...
        </p>
      )}
      {error && (
        <p className="text-center text-lg text-red-500">Error: {error}</p>
      )}
      {status === "succeeded" && nutritionData.length === 0 && !error && (
        <p className="text-center text-lg text-gray-600 mt-4">
          No nutrition data found for your query. Try something like "apple" or
          "chicken breast".
        </p>
      )}
      <div className="flex flex-col items-center gap-5 mt-5">
        {status === "succeeded" &&
          nutritionData.map((item, index) => (
            <NutritionCard key={item.name + index} item={item} />
          ))}
      </div>
    </div>
  );
};

export default NutritionPage;
