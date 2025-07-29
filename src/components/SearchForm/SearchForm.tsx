import type { SearchFormProps } from "../../type";
import { RxCross2 } from "react-icons/rx";

export default function SearchForm({
  searchTerm,
  onSearchTermChange,
  onSearchSubmit,
  placeholder = "Search...",
}: SearchFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTermChange(e.target.value);
  };

  const handleClearSearch = () => {
    onSearchTermChange("");
  };

  return (
    <div className="w-full flex-grow lg:flex-grow-0 lg:w-auto md:mb-[5px] lg:mb-0">
      <form
        onSubmit={onSearchSubmit}
        className="flex flex-col gap-2 items-end md:flex-row md:items-center w-full lg:justify-end"
      >
        <label htmlFor="search-input" className="sr-only">
          {placeholder}
        </label>

        <div className="relative w-full md:flex-grow-0 md:w-[250px] lg:w-[280px] xl:w-[350px]">
          <input
            type="text"
            id="search-input"
            value={searchTerm}
            onChange={handleChange}
            placeholder={placeholder}
            className="border bg-yellow-50 placeholder-green-700 border-gray-400 rounded-lg px-4 py-2 w-full pr-10  focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"
          />

          {searchTerm && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
              aria-label="Clear search"
            >
              <RxCross2 className="h-5 w-5" />
            </button>
          )}
        </div>

        <button
          type="submit"
          className="bg-[var(--color-main-color)] hover:bg-[#819971] text-[var(--color-heder)] hover:text-gray-500 p-2 rounded-4xl w-auto mb-4 md:mb-0 md:w-[80px] flex-shrink-0"
        >
          Search
        </button>
      </form>
    </div>
  );
}
