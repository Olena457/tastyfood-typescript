import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/recipe/recipeSelectors";
import CardRecipe from "../../components/CardRecipe/CardRecipe";
import { GiChefToque } from "react-icons/gi";
import sushiImage from "../../assets/images/sushi.png";

export default function FavoritePage() {
  const favorites = useSelector(selectFavorites);

  return (
    <div className="container  mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <h1
        className="title font-semibold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl
                        px-4 py-2 rounded mb-8
                        flex items-center justify-center gap-2"
      >
        <GiChefToque color="#5f8b5a" className="inline-block w-8 h-8" />
        Welcome to the Recipe App
      </h1>
      <div
        className="container mx-auto px-4
                           sm:px-6
                           md:px-3
                           lg:px-12
                           xl:px-16
                           2xl:px-20
                           py-2"
      >
        <ul
          className="grid grid-cols-1 gap-5 justify-items-center  p-5 rounded-lg
                               sm:grid-cols-1
                               md:grid-cols-2
                               lg:grid-cols-3
                               xl:grid-cols-4
                               2xl:grid-cols-4"
        >
          {favorites.length > 0 ? (
            favorites.map((meal) => (
              <li key={meal.idMeal} className="">
                <CardRecipe meal={meal} />
              </li>
            ))
          ) : (
            <li className="col-span-full flex flex-col items-center justify-center py-4">
              <h5 className="text-[#5f8b5a] text-center text-lg gap-2 flex flex-col items-center">
                Choose your favorite recipes.
                <img
                  src={sushiImage}
                  alt="Delicious sushi"
                  className="w-40 h-40 object-contain"
                />
              </h5>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
