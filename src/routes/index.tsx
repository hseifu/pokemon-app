import { useRoutes } from "react-router-dom";

import { publicRoutes } from "./public";
import HomePage from "@/pages/HomePage";
import FavoritesPage from "@/pages/FavoritesPage";

export const AppRoutes = () => {
  const commonRoutes = [
    { path: "/", element: <HomePage /> },
    {
      path: "/favorites",
      element: <FavoritesPage />,
    },
  ];

  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
