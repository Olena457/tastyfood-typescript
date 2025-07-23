import { useSelector } from "react-redux";
import { selectRecipeState } from "../../redux/recipe/recipeSelectors";
import CardRecipe from "../../components/CardRecipe/CardRecipe";

export default function FavoritePage() {
  const { meals } = useSelector(selectRecipeState);
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <h1 className="bg-yellow-200 border border-amber-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl px-4 py-2  rounded">
        Your Favorite Recipes
      </h1>
      <div
        className="container  mx-auto px-4
                           sm:px-6
                           md:px-8
                           lg:px-12
                           xl:px-16
                           2xl:px-20
                           py-8"
      >
        <ul
          className="grid grid-cols-1 gap-5 justify-items-center bg-yellow-50 p-5 rounded-lg 
                             sm:grid-cols-1
                             md:grid-cols-2
                             lg:grid-cols-3
                             xl:grid-cols-4
                             2xl:grid-cols-6"
        >
          {meals.length > 0 ? (
            meals.map((meal) => (
              <li key={meal.idMeal} className="">
                <CardRecipe meal={meal} />
              </li>
            ))
          ) : (
            <li className="col-span-full text-red-600 text-center text-lg py-10">
              Recipe not found
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

{
  /* <div className="bg-blue-500 sm:bg-red-500 lg:bg-amber-900"> */
}
