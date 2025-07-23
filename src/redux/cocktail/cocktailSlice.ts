import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchCocktails } from "./cocktailOperations";
import type { Cocktail, CocktailState } from "../../type";

const initialState: CocktailState = {
  cocktails: [],
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
        }
      )
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { setPage } = cocktailSlice.actions;

export default cocktailSlice.reducer;
