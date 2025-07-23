import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipe/recipeSlice";
import cocktailReducer from "./cocktail/cocktailSlice";
const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    cocktails: cocktailReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
