export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  [key: `strIngredient${number}`]: string | null;
  [key: `strMeasure${number}`]: string | null;
  strSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

export interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}
export interface MealsResponse {
  meals: Meal[] | null;
}
export interface CategoriesResponse {
  categories: Category[] | null;
}
export interface RecipeState {
  meals: Meal[];
  recipe: Meal | null;
  categories: Category[] | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  currentPage: number;
  favorites: Meal[];
}
export type SearchFormProps = {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  placeholder?: string;
};
export interface Cocktail {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string;
  // thumbnail: string;
}

export interface ApiNinjaCocktail {
  name: string;
  ingredients: string[];
  instructions: string;
}

export interface CocktailState {
  cocktails: Cocktail[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  currentPage: number;
}
