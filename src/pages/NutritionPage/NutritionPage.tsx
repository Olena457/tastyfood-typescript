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
import nutrienImage from "../../assets/images/nutrient.png";
import { GiChefToque } from "react-icons/gi";

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
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <div className="flex flex-col items-center justify-center text-center py-1">
        <h1
          className="title font-semibold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
                               px-4 py-2 rounded 
                               flex items-center justify-center gap-2"
        >
          <GiChefToque color="#5f8b5a" className="inline-block w-8 h-8" />
          Nutrition Information
        </h1>

        <div className="flex justify-center w-full mt-4 max-w-md mx-auto">
          <SearchForm
            searchTerm={searchQuery}
            onSearchTermChange={handleSearchTermChange}
            onSearchSubmit={handleSearchSubmit}
            placeholder="Enter food name..."
          />
        </div>
        {status === "idle" && nutritionData.length === 0 && (
          <div className="flex flex-col items-center justify-center py-4">
            <h5 className="text-[#5f8b5a] text-center text-lg gap-2 flex flex-col mt-4  items-center">
              Explore the nutritional value of your food. Just type the name!
              <img
                src={nutrienImage}
                alt="nutrient"
                className="w-50 h-50 object-contain"
              />
            </h5>
          </div>
        )}
        {status === "loading" && (
          <p className="text-center text-lg text-gray-600">
            Loading nutrition data...
          </p>
        )}
        {error && (
          <h4 className="text-center text-lg text-red-400">Error: {error}</h4>
        )}
        {status === "succeeded" && nutritionData.length === 0 && !error && (
          <p className="text-center text-lg text-gray-600 mt-4">
            No nutrition data found for your query. Try something like "apple"
            or "chicken breast".
          </p>
        )}
        <div className="flex flex-col items-center gap-5 mt-5">
          {status === "succeeded" &&
            nutritionData.map((item, index) => (
              <NutritionCard key={item.name + index} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionPage;
