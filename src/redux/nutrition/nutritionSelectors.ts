import type { RootState } from "../store";

export const selectNutritionData = (state: RootState) =>
  state.nutrition.nutritionData;
export const selectNutritionStatus = (state: RootState) =>
  state.nutrition.status;
export const selectNutritionError = (state: RootState) => state.nutrition.error;
export const selectNutritionSearchQuery = (state: RootState) =>
  state.nutrition.searchQuery;
