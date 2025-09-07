import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchNutritionByQuery } from "./nutritionOperations";
import type { NutritionState, NutritionItem } from "../../type";

const loadNutritionFromSessionStorage = (): NutritionItem[] => {
  try {
    const serializedNutrition = sessionStorage.getItem(
      "nutritionSearchResults"
    );
    if (serializedNutrition === null) {
      return [];
    }
    return JSON.parse(serializedNutrition) as NutritionItem[];
  } catch (error) {
    console.error("Failed to load nutrition from sessionStorage:", error);
    return [];
  }
};

const saveNutritionToSessionStorage = (nutrition: NutritionItem[]): void => {
  try {
    const serializedNutrition = JSON.stringify(nutrition);
    sessionStorage.setItem("nutritionSearchResults", serializedNutrition);
  } catch (error) {
    console.error("Failed to save nutrition to sessionStorage:", error);
  }
};

const initialState: NutritionState = {
  nutritionData: loadNutritionFromSessionStorage(),
  status: "idle",
  error: null,
  searchQuery: "",
};

const nutritionSlice = createSlice({
  name: "nutrition",
  initialState,
  reducers: {
    setNutritionSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    clearNutritionData: (state) => {
      state.nutritionData = [];
      state.error = null;
      state.status = "idle";
      sessionStorage.removeItem("nutritionSearchResults"); //  sessionStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNutritionByQuery.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(
        fetchNutritionByQuery.fulfilled,
        (state, action: PayloadAction<NutritionItem[]>) => {
          state.status = "succeeded";
          state.nutritionData = action.payload;
          state.error = null;
          saveNutritionToSessionStorage(state.nutritionData);
        }
      )
      .addCase(fetchNutritionByQuery.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch nutrition data.";
        state.nutritionData = [];
      });
  },
});

export const { setNutritionSearchQuery, clearNutritionData } =
  nutritionSlice.actions;

export default nutritionSlice.reducer;
