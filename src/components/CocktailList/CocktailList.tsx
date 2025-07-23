// import { useSelector } from "react-redux";
// import {
//   selectAllCocktails,
//   selectCocktailStatus,
//   selectCocktailError,
// } from "../../redux/cocktail/cocktailSelectors";
// import CocktailCard from "../CocktailCard/CocktailCard";

// export default function CocktailList() {
//   const cocktails = useSelector(selectAllCocktails);
//   const status = useSelector(selectCocktailStatus);
//   const error = useSelector(selectCocktailError);

//   if (status === "loading") {
//     return (
//       <div className="text-center py-8">
//         <p className="text-lg text-gray-600">Loading cocktails...</p>
//       </div>
//     );
//   }

//   if (status === "failed") {
//     return (
//       <p className="text-red-500 text-center text-lg mt-8">
//         Error: {error || "Failed to load cocktails."}
//       </p>
//     );
//   }

//   if (cocktails.length === 0 && status === "succeeded") {
//     return (
//       <p className="text-gray-600 text-center text-lg mt-8">
//         No cocktails found. Try a different search!
//       </p>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 p-4">
//       {cocktails?.map((cocktail) => (
//         <CocktailCard key={cocktail.id} cocktail={cocktail} />
//       ))}
//     </div>
//   );
// }
// src/components/CocktailList/CocktailList.tsx
import { useSelector } from "react-redux";
import {
  selectAllCocktails,
  selectCocktailStatus,
  selectCocktailError,
} from "../../redux/cocktail/cocktailSelectors";
import CocktailCard from "../CocktailCard/CocktailCard";

export default function CocktailList() {
  const cocktails = useSelector(selectAllCocktails);
  const status = useSelector(selectCocktailStatus);
  const error = useSelector(selectCocktailError);

  if (!cocktails || cocktails.length === 0) {
    if (status === "idle" || status === "loading") {
      return (
        <div className="text-center py-8">
          <p className="text-lg text-gray-600">Loading cocktails...</p>
        </div>
      );
    }
    if (status === "succeeded") {
      return (
        <p className="text-gray-600 text-center text-lg mt-8">
          No cocktails found. Try a different search!
        </p>
      );
    }
    if (status === "failed") {
      return (
        <p className="text-red-500 text-center text-lg mt-8">
          Error: {error || "Failed to load cocktails."}
        </p>
      );
    }
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 p-4">
      {cocktails?.map((cocktail) => (
        <CocktailCard key={cocktail.id} cocktail={cocktail} />
      ))}
    </div>
  );
}
