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

import FALLBACK_BROKEN_IMAGE from "../../assets/images/def.jpg";

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
      <div className="flex justify-center items-center min-h-screen text-lg text-gray-700">
        Loading...
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center text-red-600 p-8">
        Error: {error || "Unknown error loading cocktail."}
      </div>
    );
  }

  if (!selectedCocktail) {
    return (
      <div className="text-center text-gray-500 p-8">No cocktail found.</div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8">
      <div className="flex flex-col items-start rounded-2xl border border-gray-300 bg-white shadow-lg p-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start w-full mb-6 gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 w-full md:w-auto">
            <img
              src={selectedCocktail.thumbnail}
              alt={selectedCocktail.name}
              className="max-w-xs h-48 object-cover rounded-2xl flex-shrink-0 mx-auto md:w-[200px] md:h-[200px] md:mx-0"
              onError={(e) => {
                e.currentTarget.src = FALLBACK_BROKEN_IMAGE;
                e.currentTarget.onerror = null;
              }}
            />
            <div className="w-full text-center md:text-left mt-4 md:mt-0">
              <h3 className="font-semibold text-2xl leading-[133%] text-gray-900 pb-3">
                {selectedCocktail.name}
              </h3>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleGoBack}
          className="w-full md:w-[200px] h-10 rounded-4xl border border-gray-500 bg-gray-100 text-gray-700 hover:bg-gray-200 focus:bg-gray-300 mt-4 md:mt-0 md:ml-auto" // Adjusted margin for potential right alignment
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
