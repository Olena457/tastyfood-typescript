import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { NutritionItem } from "../../type"; // Переконайтеся, що цей шлях правильний і містить NutritionItem

const NINJA_API_KEY = import.meta.env.VITE_NINJA_API_KEY;
const API_NINJAS_NUTRITION_URL = "https://api.api-ninjas.com/v1/nutrition"; // Специфічний URL для Nutrition API

interface FetchNutritionArgs {
  query: string;
}

export const fetchNutritionByQuery = createAsyncThunk<
  NutritionItem[],
  FetchNutritionArgs,
  { rejectValue: string }
>("nutrition/fetchByQuery", async ({ query }, { rejectWithValue }) => {
  try {
    const response = await axios.get<NutritionItem[]>(
      `${API_NINJAS_NUTRITION_URL}?query=${encodeURIComponent(query)}`,
      {
        headers: {
          "X-Api-Key": NINJA_API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (
        error.response.status === 400 &&
        error.response.data &&
        error.response.data.error === "No nutrition information found"
      ) {
        return rejectWithValue(
          "No nutrition information found for your query."
        );
      }
      return rejectWithValue(
        error.response.data.error || "Failed to fetch nutrition data."
      );
    }
    return rejectWithValue("An unknown error occurred.");
  }
});
