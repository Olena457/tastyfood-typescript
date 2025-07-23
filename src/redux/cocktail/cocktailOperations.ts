// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import type { Cocktail, ApiNinjaCocktail } from "../../type";
// const API_NINJAS_KEY = "YOUR_API_KEY"; // API KEY!
// const API_NINJAS_URL = "https://api.api-ninjas.com/v1/cocktail";

// export const fetchCocktails = createAsyncThunk<
//   Cocktail[],
//   { search?: string },
//   { rejectValue: string }
// >("cocktail/fetch", async ({ search }, thunkAPI) => {
//   try {
//     const params = search ? { name: search.trim() } : {};

//     const { data } = await axios.get<ApiNinjaCocktail[]>(API_NINJAS_URL, {
//       headers: { "X-Api-Key": API_NINJAS_KEY },
//       params: params,
//     });

//     if (data.length === 0) {
//       return [];
//     }
//     const processedCocktails: Cocktail[] = data.map((item) => ({
//       id: item.name.toLowerCase().replace(/\s/g, "-"),
//       name: item.name,
//       ingredients: item.ingredients,
//       instructions: item.instructions,
//       thumbnail: `https://via.placeholder.com/150?text=${encodeURIComponent(
//         item.name
//       )}`,
//     }));

//     return processedCocktails.slice(0, 6);
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       return thunkAPI.rejectWithValue(
//         error.response?.data?.message || "Failed to fetch cocktails"
//       );
//     }
//     return thunkAPI.rejectWithValue("An unknown error occurred");
//   }
// });

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Cocktail, ApiNinjaCocktail } from "../../type";
// import cocktailLocalImages from "../../data/cocktailLocalImages"; // **ВИДАЛЕНО**

const API_NINJAS_KEY = "YOUR_API_KEY"; //  API КЛЮЧ ТУТ
const API_NINJAS_URL = "https://api.api-ninjas.com/v1/cocktail";

export const fetchCocktails = createAsyncThunk<
  Cocktail[],
  { search?: string },
  { rejectValue: string }
>("cocktail/fetch", async ({ search }, thunkAPI) => {
  try {
    const params = search ? { name: search.trim() } : {};

    const { data } = await axios.get<ApiNinjaCocktail[]>(API_NINJAS_URL, {
      headers: { "X-Api-Key": API_NINJAS_KEY },
      params: params,
    });

    if (data.length === 0) {
      return [];
    }

    const processedCocktails: Cocktail[] = data.map((item) => {
      const id = item.name.toLowerCase().replace(/\s/g, "-");
      // const randomIndex = Math.floor(Math.random() * cocktailLocalImages.length); // **ВИДАЛЕНО**
      // const randomImageUrl = cocktailLocalImages[randomIndex]; // **ВИДАЛЕНО**

      return {
        id: id,
        name: item.name,
        ingredients: item.ingredients,
        instructions: item.instructions,
        // thumbnail: randomImageUrl, //
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
