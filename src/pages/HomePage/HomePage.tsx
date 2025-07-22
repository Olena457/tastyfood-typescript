import ListRecipe from "../../components/ListRecipe/ListRecipe";
export default function HomePage() {
  return (
    <div
      className="container mx-auto px-4
                 sm:px-6
                 md:px-8
                 lg:px-12
                 xl:px-16
                 2xl:px-20"
    >
      <h1 className=" bg-yellow-50 border border-red-400text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-4 py-3 rounded">
        Welcome to the Recipe App
      </h1>
      <ListRecipe />
    </div>
  );
}
