import type { RootState } from "../store";

export const selectCocktailState = (state: RootState) => state.cocktails;

export const selectAllCocktails = (state: RootState) =>
  state.cocktails.cocktails;
export const selectCocktailStatus = (state: RootState) =>
  state.cocktails.status;
export const selectCocktailError = (state: RootState) => state.cocktails.error;
