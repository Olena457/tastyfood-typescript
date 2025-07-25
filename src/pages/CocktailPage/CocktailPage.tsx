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
      <h1
        className="title font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
            px-4 py-2 rounded"
      >
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
