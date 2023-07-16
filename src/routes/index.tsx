import { useRoutes } from "react-router-dom";

import { publicRoutes } from "./public";
import HomePage from "@/pages/HomePage";

export const AppRoutes = () => {
  const commonRoutes = [{ path: "/", element: <HomePage /> }];

  const routes = publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
