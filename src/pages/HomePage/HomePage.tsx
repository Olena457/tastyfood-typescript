import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe } from "../../redux/recipe/recipeOperations";
import type { AppDispatch } from "../../redux/store";
import { GiChefToque } from "react-icons/gi";

import ListRecipe from "../../components/ListRecipe/ListRecipe";
import FilterRecipe from "../../components/FilterRecipe/FilterRecipe";
import SearchForm from "../../components/SearchForm/SearchForm";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      dispatch(fetchRecipe({ search: searchTerm }));
      setSearchTerm("");
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-1 xl:px-10 2xl:px-9">
      <h1
        className="title gap-0 font-semibold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
                   px-4 py-2 rounded mb-2
                   flex items-center justify-center sm:gap-2"
      >
        <GiChefToque color="#5f8b5a" className="inline-block w-8 h-8" />
        Welcome to the Recipe App
      </h1>
      <div className="my-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-center lg:my-4">
        <SearchForm
          searchTerm={searchTerm}
          onSearchTermChange={handleSearchTermChange}
          onSearchSubmit={handleSearchSubmit}
          placeholder="Search for recipes..."
        />
        <FilterRecipe />
      </div>
      <ListRecipe />
    </div>
  );
}
