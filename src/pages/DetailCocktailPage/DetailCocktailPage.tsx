import DetailCocktail from "../../components/DetailCocktail/DetailCocktail";
import { GiChefToque } from "react-icons/gi";

export default function DetailCocktailPage() {
  return (
    <>
      <h1
        className="title font-semibold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
                            px-4 py-2 rounded mb-8
                            flex items-center justify-center gap-2"
      >
        <GiChefToque color="#5f8b5a" className="inline-block w-8 h-8" />
        Recipe cocktail
      </h1>
      <div className="container mx-auto px-4 py-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <DetailCocktail />
      </div>
    </>
  );
}
