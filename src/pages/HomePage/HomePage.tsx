// // <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
// // <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe } from "../../redux/recipe/recipeOperations";
import type { AppDispatch } from "../../redux/store";

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
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <h1 className="bg-yellow-200 border border-amber-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-4 py-2  rounded">
        Welcome to the Recipe App
      </h1>
      <div className="my-4 flex flex-col lg:flex-row lg:gap-4 lg:items-center">
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
