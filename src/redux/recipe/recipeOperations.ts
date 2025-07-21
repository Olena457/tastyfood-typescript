// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import type {
//   Meal,
//   Category,
//   MealsResponse,
//   CategoriesResponse,
// } from "../../type";

// axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1";

// const handleApiError = (
//   error: unknown,
//   thunkAPI: any,
//   defaultMessage: string
// ) => {
//   if (axios.isAxiosError(error)) {
//     return thunkAPI.rejectWithValue(
//       error.response?.data?.message || error.message
//     );
//   } else if (error instanceof Error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
//   return thunkAPI.rejectWithValue(defaultMessage);
// };

// export const fetchRecipe = createAsyncThunk<
//   Meal[],
//   { category?: string; search?: string }
// >("recipe/fetch", async ({ category, search }, thunkAPI) => {
//   try {
//     let url: string;
//     const params: { s?: string; c?: string; f?: string } = {};

//     if (search) {
//       url = "/search.php";
//       params.s = search.trim();
//     } else if (category) {
//       url = "/filter.php";
//       params.c = category.trim();
//     } else {
//       url = "/search.php";
//       params.f = "a";
//     }

//     const { data } = await axios.get<MealsResponse>(url, { params });

//     return data.meals || [];
//   } catch (error: unknown) {
//     return handleApiError(error, thunkAPI, "An unknown error fetching recipes");
//   }
// });

// export const fetchCategories = createAsyncThunk<Category[]>(
//   "recipe/fetchCategories",
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get<CategoriesResponse>("/categories.php");
//       return data.categories || [];
//     } catch (error: unknown) {
//       return handleApiError(error, thunkAPI, "Failed to fetch categories");
//     }
//   }
// );

// export const fetchRecipeById = createAsyncThunk<Meal, string>(
//   "recipe/fetchById",
//   async (id, thunkAPI) => {
//     try {
//       const { data } = await axios.get<MealsResponse>(`/lookup.php?i=${id}`);

//       if (data.meals && data.meals.length > 0) {
//         return data.meals[0];
//       }
//       return thunkAPI.rejectWithValue("Recipe not found with the provided ID.");
//     } catch (error: unknown) {
//       return handleApiError(error, thunkAPI, "Failed to fetch recipe by ID");
//     }
//   }
// );
