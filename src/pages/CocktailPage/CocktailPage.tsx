import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import SearchForm from "../../components/SearchForm/SearchForm";
import CocktailList from "../../components/CocktailList/CocktailList";
import { fetchCocktails } from "../../redux/cocktail/cocktailOperations";
import { GiChefToque } from "react-icons/gi";

export default function CocktailsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(fetchCocktails({ search: "Margarita" }));
  //   setSearchTerm("Margarita");
  // }, [dispatch]);

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchCocktails({ search: searchTerm }));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-1 xl:px-10 2xl:px-9">
      <div className="flex flex-col items-center justify-center text-center py-1">
        <h1
          className="title font-semibold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
                               px-4 py-2 rounded 
                               flex items-center justify-center gap-2"
        >
          <GiChefToque color="#5f8b5a" className="inline-block w-8 h-8" />
          Drink Recipes
        </h1>
        <div className="flex flex-col lg:flex-row gap-4 items-center m-4">
          <SearchForm
            searchTerm={searchTerm}
            onSearchTermChange={handleSearchTermChange}
            onSearchSubmit={handleSearchSubmit}
            placeholder="Search for cocktails..."
          />
        </div>
      </div>

      <CocktailList />
    </div>
  );
}
