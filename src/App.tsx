import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout/Layout";
import SkeletonCard from "./components/SkeletonCard/SkeletonCard";
// import { useDispatch, useSelector } from 'react-redux';
// const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RecipePage = lazy(() => import("./pages/RecipePage/RecipePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const RecipeFavoritePage = lazy(
  () => import("./pages/FavoritePage/FavoritePage")
);
const App: React.FC = () => {
  return (
    <>
      <Suspense fallback={<SkeletonCard />}>
        <Layout>
          <Routes>
            {/* <Route path="/" element={<MainPage />} /> */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipePage />} />
            <Route path="/favorites" element={<RecipeFavoritePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
};
export default App;
