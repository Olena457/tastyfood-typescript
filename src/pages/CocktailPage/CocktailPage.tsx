// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "../../redux/store";
// import SearchForm from "../../components/SearchForm/SearchForm";
// import CocktailList from "../../components/CocktailList/CocktailList";
// import { fetchCocktails } from "../../redux/cocktail/cocktailOperations";

// export default function CocktailsPage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const dispatch = useDispatch<AppDispatch>();

//   const handleSearchTermChange = (term: string) => {
//     setSearchTerm(term);
//   };

//   const handleSearchSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(fetchCocktails({ search: searchTerm }));
//   };

//   useEffect(() => {
//     dispatch(fetchCocktails({}));
//   }, [dispatch]);

//   return (
//     <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8">
//       <h1 className="bg-yellow-200 border border-amber-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-4 py-2 rounded mb-8">
//         Discover Cocktails
//       </h1>

//       <div className="flex flex-col lg:flex-row gap-4 items-center mb-8">
//         <SearchForm
//           searchTerm={searchTerm}
//           onSearchTermChange={handleSearchTermChange}
//           onSearchSubmit={handleSearchSubmit}
//           placeholder="Search for cocktails..."
//         />
//       </div>

//       <CocktailList />
//     </div>
//   );
// }
// src/pages/CocktailsPage/CocktailsPage.tsx

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import SearchForm from "../../components/SearchForm/SearchForm";
import CocktailList from "../../components/CocktailList/CocktailList";
import { fetchCocktails } from "../../redux/cocktail/cocktailOperations";

export default function CocktailsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCocktails({ search: "Margarita" }));
    setSearchTerm("Margarita");
  }, [dispatch]);

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchCocktails({ search: searchTerm }));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8">
      <h1 className="bg-yellow-200 border border-amber-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-4 py-2 rounded mb-8">
        Discover Cocktails
      </h1>

      <div className="flex flex-col lg:flex-row gap-4 items-center mb-8">
        <SearchForm
          searchTerm={searchTerm}
          onSearchTermChange={handleSearchTermChange}
          onSearchSubmit={handleSearchSubmit}
          placeholder="Search for cocktails..."
        />
      </div>

      <CocktailList />
    </div>
  );
}
