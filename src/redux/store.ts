import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipe/recipeSlice";
import nutritionReducer from "./nutrition/nutritionSlice";
import cocktailReducer from "./cocktail/cocktailSlice";
const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    cocktails: cocktailReducer,
    nutrition: nutritionReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
