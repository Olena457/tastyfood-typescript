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

//   if (!cocktails || cocktails.length === 0) {
//     if (status === "idle" || status === "loading") {
//       return (
//         <div className="text-center py-8">
//           <p className="text-lg text-gray-600">Loading cocktails...</p>
//         </div>
//       );
//     }
//     if (status === "succeeded") {
//       return (
//         <p className="text-gray-600 text-center text-lg mt-8">
//           No cocktails found. Try a different search!
//         </p>
//       );
//     }
//     if (status === "failed") {
//       return (
//         <p className="text-red-400 text-center text-lg mt-8">
//           Error: {error || "Failed to load cocktails."}
//         </p>
//       );
//     }
//     return null;
//   }

//   return (
//     <ul
//       className="grid grid-cols-1 gap-5 justify-items-center bg-yellow-50 p-5 rounded-lg
//                  sm:grid-cols-2
//                  md:grid-cols-2
//                  lg:grid-cols-3
//                  xl:grid-cols-4
//                  2xl:grid-cols-4"
//     >
//       {cocktails.map((cocktail) => (
//         <li key={cocktail.id} className="w-full">
//           <CocktailCard cocktail={cocktail} />
//         </li>
//       ))}
//     </ul>
//   );
// }
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

  if (status === "loading") {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-gray-600">Loading cocktails...</p>
      </div>
    );
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
      <h5 className="text-gray-600 text-center text-lg mt-8">
        Enter a cocktail name in the search bar to discover new drinks!
      </h5>
    );
  }

  if (status === "succeeded" && cocktails.length === 0) {
    return (
      <p className="text-gray-600 text-center text-lg mt-8">
        No cocktails found. Try a different search!
      </p>
    );
  }

  return (
    <ul
      className="grid grid-cols-1 gap-5 justify-items-center bg-yellow-50 p-5 rounded-lg
                 sm:grid-cols-2
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
