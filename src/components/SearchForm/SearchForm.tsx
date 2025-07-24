import type { SearchFormProps } from "../../type";

export default function SearchForm({
  searchTerm,
  onSearchTermChange,
  onSearchSubmit,
  placeholder = "Search...",
}: SearchFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTermChange(e.target.value);
  };

  return (
    <div className="w-full flex-grow lg:flex-grow-0 lg:w-auto md:mb-[5px] lg:mb-0">
      <form
        onSubmit={onSearchSubmit}
        className="flex  flex-col gap-2 items-end md:flex-row md:items-center w-full lg:justify-end"
      >
        <label htmlFor="search-input" className="sr-only">
          {placeholder}
        </label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={handleChange}
          placeholder={placeholder}
          className="border bg-yellow-50 border-gray-500 rounded-lg px-4 py-2 w-full md:flex-grow-0 md:w-[250px] lg:w-[280px] xl:w-[350px]"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-auto mb-4 md:mb-0 md:w-[80px] flex-shrink-0"
        >
          Search
        </button>
      </form>
    </div>
  );
}
