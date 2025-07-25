import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchRecipe,
  fetchRecipeById,
  fetchCategories,
} from "./recipeOperations";
import type { Meal, Category, RecipeState } from "../../type";

// Download favorites fromlocalStorage
const loadFavoritesFromLocalStorage = (): Meal[] => {
  try {
    const serializedFavorites = localStorage.getItem("favorites");
    if (serializedFavorites === null) {
      return [];
    }
    return JSON.parse(serializedFavorites) as Meal[];
  } catch (error) {
    console.error("Failed to load favorites from localStorage:", error);
    return [];
  }
};

const initialState: RecipeState = {
  meals: [],
  recipe: null,
  categories: [],
  status: "idle",
  error: null,
  currentPage: 1,
  favorites: loadFavoritesFromLocalStorage(),
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    addToFavorites: (state, action: PayloadAction<Meal>) => {
      const exists = state.favorites.find(
        (meal) => meal.idMeal === action.payload.idMeal
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (meal) => meal.idMeal !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipe.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchRecipe.fulfilled,
        (state, action: PayloadAction<Meal[]>) => {
          state.status = "succeeded";
          state.meals = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchRecipe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.status = "succeeded";
          state.categories = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      })
      .addCase(fetchRecipeById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchRecipeById.fulfilled,
        (state, action: PayloadAction<Meal>) => {
          state.status = "succeeded";
          state.recipe = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { setPage, addToFavorites, removeFromFavorites } =
  recipeSlice.actions;

export default recipeSlice.reducer;
