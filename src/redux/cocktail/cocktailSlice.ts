import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchCocktails, fetchCocktailById } from "./cocktailOperations";
import type { Cocktail, CocktailState } from "../../type";

const loadCocktailFavoritesFromLocalStorage = (): Cocktail[] => {
  try {
    const serializedFavorites = localStorage.getItem("cocktailFavorites");
    if (serializedFavorites === null) {
      return [];
    }
    return JSON.parse(serializedFavorites) as Cocktail[];
  } catch (error) {
    console.error(
      "Failed to load cocktail favorites from localStorage:",
      error
    );
    return [];
  }
};

const initialState: CocktailState = {
  cocktails: [],
  selectedCocktail: null,
  status: "idle",
  error: null,
  currentPage: 1,
  favorites: loadCocktailFavoritesFromLocalStorage(),
};

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    addToCocktailFavorites: (state, action: PayloadAction<Cocktail>) => {
      const exists = state.favorites.find(
        (cocktail) => cocktail.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
        localStorage.setItem(
          "cocktailFavorites",
          JSON.stringify(state.favorites)
        );
      }
    },
    removeFromCocktailFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (cocktail) => cocktail.id !== action.payload
      );
      localStorage.setItem(
        "cocktailFavorites",
        JSON.stringify(state.favorites)
      );
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

export const { setPage, addToCocktailFavorites, removeFromCocktailFavorites } =
  cocktailSlice.actions;

export default cocktailSlice.reducer;

// ____________________________________________________________________________________
// src/redux/cocktail/cocktailSlice.ts
// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { fetchCocktails, fetchCocktailById } from "./cocktailOperations";
// import type { Cocktail, CocktailState } from "../../type";

// const loadCocktailFavoritesFromLocalStorage = (): Cocktail[] => {
//   try {
//     const serializedFavorites = localStorage.getItem("cocktailFavorites");
//     if (serializedFavorites === null) {
//       return [];
//     }
//     return JSON.parse(serializedFavorites) as Cocktail[];
//   } catch (error) {
//     console.error(
//       "Failed to load cocktail favorites from localStorage:",
//       error
//     );
//     return [];
//   }
// };

// const saveCocktailFavoritesToLocalStorage = (favorites: Cocktail[]) => {
//   try {
//     localStorage.setItem("cocktailFavorites", JSON.stringify(favorites));
//   } catch (error) {
//     console.error("Failed to save cocktail favorites to localStorage:", error);
//   }
// };

// const initialState: CocktailState = {
//   cocktails: [],
//   selectedCocktail: null,
//   status: "idle",
//   error: null,
//   currentPage: 1,
//   favorites: loadCocktailFavoritesFromLocalStorage(),
// };

// const cocktailSlice = createSlice({
//   name: "cocktail",
//   initialState,
//   reducers: {
//     setPage: (state, action: PayloadAction<number>) => {
//       state.currentPage = action.payload;
//     },
//     addToCocktailFavorites: (state, action: PayloadAction<Cocktail>) => {
//       const exists = state.favorites.find(
//         (cocktail) => cocktail.id === action.payload.id
//       );
//       if (!exists) {
//         state.favorites.push(action.payload);
//         saveCocktailFavoritesToLocalStorage(state.favorites);
//       }
//     },
//     removeFromCocktailFavorites: (state, action: PayloadAction<string>) => {
//       state.favorites = state.favorites.filter(
//         (cocktail) => cocktail.id !== action.payload
//       );
//       saveCocktailFavoritesToLocalStorage(state.favorites);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCocktails.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(
//         fetchCocktails.fulfilled,
//         (state, action: PayloadAction<Cocktail[]>) => {
//           state.status = "succeeded";
//           state.cocktails = action.payload;
//           state.error = null;
//         }
//       )
//       .addCase(fetchCocktails.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload || "Something went wrong";
//       })
//       .addCase(fetchCocktailById.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(
//         fetchCocktailById.fulfilled,
//         (state, action: PayloadAction<Cocktail>) => {
//           state.status = "succeeded";
//           state.selectedCocktail = action.payload;
//           state.error = null;
//         }
//       )
//       .addCase(fetchCocktailById.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload || "Failed to load cocktail details.";
//         state.selectedCocktail = null;
//       });
//   },
// });

// export const { setPage, addToCocktailFavorites, removeFromCocktailFavorites } =
//   cocktailSlice.actions;

// export default cocktailSlice.reducer;
