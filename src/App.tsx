import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout/Layout";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RecipePage = lazy(() => import("./pages/RecipePage/RecipePage"));
const NutritionPage = lazy(() => import("./pages/NutritionPage/NutritionPage"));
const CocktailPage = lazy(() => import("./pages/CocktailPage/CocktailPage"));
const DetailCocktailPage = lazy(
  () => import("./pages/DetailCocktailPage/DetailCocktailPage")
);
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const RecipeFavoritePage = lazy(
  () => import("./pages/FavoritePage/FavoritePage")
);

const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<SkeletonLoader />}>
        <Layout>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
            <Route path="/favorites" element={<RecipeFavoritePage />} />
            <Route path="/cocktail" element={<CocktailPage />} />
            <Route path="/cocktail/:id" element={<DetailCocktailPage />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
};
export default App;
