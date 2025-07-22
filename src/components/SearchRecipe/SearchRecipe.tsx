import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe } from "../../redux/recipe/recipeOperations";
import type { AppDispatch } from "../../redux/store";

export default function SearchRecipe() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      dispatch(fetchRecipe({ search: searchTerm }));
      setSearchTerm("");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <label className="sr-only">Search Recipes</label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search for recipes..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md"
        />
        <button
          type="submit"
          className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2"
        >
          Search
        </button>
      </form>
    </div>
  );
}
