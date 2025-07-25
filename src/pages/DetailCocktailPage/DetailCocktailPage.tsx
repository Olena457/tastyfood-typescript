import DetailCocktail from "../../components/DetailCocktail/DetailCocktail";

export default function DetailCocktailPage() {
  return (
    <>
      <h1
        className="title font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
            px-4 py-2 rounded"
      >
        Recipe
      </h1>
      <div className="container mx-auto px-4 py-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <DetailCocktail />
      </div>
    </>
  );
}
