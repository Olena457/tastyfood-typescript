import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchCocktails, fetchCocktailById } from "./cocktailOperations";
import type { Cocktail, CocktailState } from "../../type";

// loading data sessionStorage
const loadCocktailsFromSessionStorage = (): Cocktail[] => {
  try {
    const serializedCocktails = sessionStorage.getItem("cocktailSearchResults");
    if (serializedCocktails === null) {
      return [];
    }
    return JSON.parse(serializedCocktails) as Cocktail[];
  } catch (error) {
    console.error("Failed to load cocktails from sessionStorage:", error);
    return [];
  }
};

// save data in sessionStorage
const saveCocktailsToSessionStorage = (cocktails: Cocktail[]): void => {
  try {
    const serializedCocktails = JSON.stringify(cocktails);
    sessionStorage.setItem("cocktailSearchResults", serializedCocktails);
  } catch (error) {
    console.error("Failed to save cocktails to sessionStorage:", error);
  }
};

const initialState: CocktailState = {
  cocktails: loadCocktailsFromSessionStorage(), // loading during start
  selectedCocktail: null,
  status: "idle",
  error: null,
  currentPage: 1,
};

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchCocktails.fulfilled,
        (state, action: PayloadAction<Cocktail[]>) => {
          state.status = "succeeded";
          state.cocktails = action.payload;
          state.error = null;
          saveCocktailsToSessionStorage(state.cocktails); // Зберігаємо тут
        }
      )
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Something went wrong";
      })
      .addCase(fetchCocktailById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchCocktailById.fulfilled,
        (state, action: PayloadAction<Cocktail>) => {
          state.status = "succeeded";
          state.selectedCocktail = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchCocktailById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to load cocktail details.";
        state.selectedCocktail = null;
      });
  },
});

export const { setPage } = cocktailSlice.actions;

export default cocktailSlice.reducer;
