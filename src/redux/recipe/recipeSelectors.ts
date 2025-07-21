import type { RootState } from "../store";

export const selectRecipeState = (state: RootState) => state.recipes;
export const selectCategories = (state: RootState) => state.recipes.categories;
