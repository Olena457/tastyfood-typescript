import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCocktailById } from "../../redux/cocktail/cocktailOperations";
import {
  selectSelectedCocktail,
  selectCocktailStatus,
  selectCocktailError,
} from "../../redux/cocktail/cocktailSelectors";

import FALLBACK_BROKEN_IMAGE from "../../assets/images/mango.jpg";

export default function DetailCocktail() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const selectedCocktail = useSelector(selectSelectedCocktail);
  const status = useSelector(selectCocktailStatus);
  const error = useSelector(selectCocktailError);

  useEffect(() => {
    if (id) {
      dispatch(fetchCocktailById(id));
    }
  }, [dispatch, id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (status === "loading") {
    return (
      <div className="text-center py-8">
        <h4 className="text-lg mt-9 text-[#5f8b5a]">
          Loading cocktail recipe...
        </h4>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center text-red-400 p-8">
        Error: {error || "Unknown error loading cocktail."}
      </div>
    );
  }

  if (!selectedCocktail) {
    return (
      <div className="text-center text-gray-500 p-8">No found cocktail.</div>
    );
  }

  return (
    <div className="container mx-auto px-1 sm:px-2 md:p-8 lg:p-12 xl:p-16 2xl:p-40">
      <div className="flex flex-col items-start rounded-2xl border border-gray-300 bg-[#f5f5dc] shadow-lg p-4 md:p-12 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start w-full  mb-6 gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 w-full md:w-auto">
            <div className="w-full text-center md:text-left mt-4 md:mt-0">
              <h3 className="font-semibold text-2xl leading-[133%] text-gray-900 pb-3">
                {selectedCocktail.name}
              </h3>
            </div>
            <div className="w-full md:w-[350px] lg:w-[480px]  h-auto overflow-hidden rounded-2xl flex-shrink-0">
              <img
                src={selectedCocktail.thumbnail}
                alt={selectedCocktail.name}
                className=" h-48 object-cover w-full rounded-2xl flex-shrink-0 mx-auto  md:mx-0"
                onError={(e) => {
                  e.currentTarget.src = FALLBACK_BROKEN_IMAGE;
                  e.currentTarget.onerror = null;
                }}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoBack}
          className="min-w-[200px] max-w-[400px] lg:ml-50 h-10 rounded-4xl border border-gray-500 bg-[#a4be92] text-gray-700 hover:text-cyan-50 hover:bg-[#93ae7f] focus:bg-[#93ae7f] mt-4 md:mt-50% " // Adjusted margin for potential right alignment
        >
          Go Back
        </button>

        <div className="mt-8 w-full">
          <h4 className="font-semibold text-lg leading-relaxed text-gray-900 pb-3">
            Ingredients:
          </h4>
          <ul>
            {selectedCocktail.ingredients &&
            selectedCocktail.ingredients.length > 0 ? (
              selectedCocktail.ingredients.map((ingredient, index) => (
                <li
                  key={`${ingredient}-${index}`}
                  className="flex justify-between w-full max-w-md font-normal text-base leading-relaxed text-gray-800 pt-[5px] border-b border-dashed border-gray-800"
                >
                  <span>{ingredient}</span>
                </li>
              ))
            ) : (
              <p className="font-normal text-base leading-relaxed text-gray-800 pb-[15px]">
                No ingredients available
              </p>
            )}
          </ul>
        </div>

        <div className="mt-8 w-full">
          <h4 className="font-semibold text-lg leading-relaxed text-gray-900 pb-3">
            Instructions:
          </h4>
          <p className="font-normal text-base leading-relaxed text-gray-800 pb-4 whitespace-pre-line">
            {selectedCocktail.instructions || "No instructions available."}
          </p>
        </div>
      </div>
    </div>
  );
}
