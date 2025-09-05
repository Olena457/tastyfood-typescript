import { useSelector } from "react-redux";
import {
  selectAllCocktails,
  selectCocktailStatus,
  selectCocktailError,
} from "../../redux/cocktail/cocktailSelectors";
import CocktailCard from "../CocktailCard/CocktailCard";
import freshImage from "../../assets/images/fresh.png";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

export default function CocktailList() {
  const cocktails = useSelector(selectAllCocktails);
  const status = useSelector(selectCocktailStatus);
  const error = useSelector(selectCocktailError);

  if (status === "loading") {
    return <SkeletonLoader />;
  }

  if (status === "failed") {
    return (
      <p className="text-red-400 text-center text-lg mt-8">
        Error: {error || "Failed to load cocktails."}
      </p>
    );
  }

  if (status === "idle" && cocktails.length === 0) {
    return (
      <li className="col-span-full flex flex-col items-center justify-center py-0">
        <h5 className="text-[#5f8b5a] text-center text-lg gap-2 flex flex-col items-center">
          Looking for a cocktail recipe? Just type the name!
          <img
            src={freshImage}
            alt="Delicious sushi"
            className="w-40 h-40 object-contain"
          />
        </h5>
      </li>
    );
  }

  if (status === "succeeded" && cocktails.length === 0) {
    return (
      <p className="text-[#5f8b5a] text-center text-lg mt-8">
        No cocktails not found. Try a different search!
      </p>
    );
  }

  return (
    <ul
      className="grid grid-cols-1 mx-auto gap-5 justify-items-center  bg-amber-700 p-5 rounded-lg
                 sm:grid-cols-1
                 md:grid-cols-2
                 lg:grid-cols-3
                 xl:grid-cols-4
                 2xl:grid-cols-4"
    >
      {cocktails.map((cocktail) => (
        <li key={cocktail.id} className="w-full">
          <CocktailCard cocktail={cocktail} />
        </li>
      ))}
    </ul>
  );
}
