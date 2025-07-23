import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import type {
  Meal,
  Category,
  MealsResponse,
  CategoriesResponse,
} from "../../type";

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipe = createAsyncThunk<
  Meal[],
  { category?: string; search?: string }
>("recipe/fetch", async ({ category, search }, thunkAPI) => {
  try {
    let url = "/search.php?s=";
    let params = {};

    if (search) {
      params = { s: search.trim() };
    } else if (category) {
      url = "/filter.php";
      params = { c: category.trim() };
    } else {
      url = "/search.php?f=b";
    }
    const { data } = await axios.get<MealsResponse>(url, { params });

    return data.meals || [];
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }

    return thunkAPI.rejectWithValue("An unknown error occurred");
  }
});

export const fetchCategories = createAsyncThunk<Category[]>(
  "recipe/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get<CategoriesResponse>("/categories.php");
      return data.categories || [];
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Failed to fetch categories");
    }
  }
);

export const fetchRecipeById = createAsyncThunk<Meal, string>(
  "recipe/fetchById",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get<MealsResponse>(`/lookup.php?i=${id}`);
      if (data.meals && data.meals.length > 0) {
        return data.meals[0];
      }
      return thunkAPI.rejectWithValue("Recipe not found");
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue("Failed to fetch recipe by ID");
    }
  }
);
