// // src/pages/CocktailPage/CocktailPage.tsx
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "../../redux/store";
// import { fetchCocktails } from "../../redux/cocktail/cocktailOperations";
// import SearchForm from "../../components/SearchForm/SearchForm";
// import CocktailList from "../../components/CocktailList/CocktailList";

// export default function CocktailPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const dispatch = useDispatch<AppDispatch>();

//   useEffect(() => {
//     dispatch(fetchCocktails({}));
//   }, [dispatch]);

//   const handleSearchTermChange = (term: string) => {
//     setSearchTerm(term);
//   };

//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchTerm.trim() !== "") {
//       dispatch(fetchCocktails({ search: searchTerm }));
//     } else {
//       dispatch(fetchCocktails({}));
//     }
//   };

//   return (
//     <div className=" mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//       <h1 className="bg-yellow-50 border border-red-400 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-4 py-3 rounded">
//         Cocktail Recipes
//       </h1>
//       <div>
//         <CocktailList />
//       </div>
//     </div>
//   );
// }
