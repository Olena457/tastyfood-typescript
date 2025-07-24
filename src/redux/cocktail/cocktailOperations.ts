import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Cocktail, ApiNinjaCocktail } from "../../type";
import cocktailLocalImages from "../../data/cocktailLocalImages";

const NINJA_API_KEY = import.meta.env.VITE_NINJA_API_KEY;
const API_NINJAS_URL = "https://api.api-ninjas.com/v1/cocktail";

export const fetchCocktails = createAsyncThunk<
  Cocktail[],
  { search?: string },
  { rejectValue: string }
>("cocktail/fetch", async ({ search }, thunkAPI) => {
  try {
    const params = search ? { name: search.trim() } : {};

    const { data } = await axios.get<ApiNinjaCocktail[]>(API_NINJAS_URL, {
      headers: { "X-Api-Key": NINJA_API_KEY },
      params: params,
    });

    if (data.length === 0) {
      return [];
    }

    const processedCocktails: Cocktail[] = data.map((item) => {
      const id = item.name.toLowerCase().replace(/\s/g, "-");
      const randomIndex = Math.floor(
        Math.random() * cocktailLocalImages.length
      );
      const randomImageUrl = cocktailLocalImages[randomIndex];

      return {
        id: id,
        name: item.name,
        ingredients: item.ingredients,
        instructions: item.instructions,
        thumbnail: randomImageUrl,
      };
    });

    return processedCocktails.slice(0, 6);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return thunkAPI.rejectWithValue("No cocktails found for your search.");
      }
      return thunkAPI.rejectWithValue(
        error.response?.data?.message ||
          "Failed to fetch cocktails. Check API key or network."
      );
    }
    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});
