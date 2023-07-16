import ErrorPage from "@/pages/ErrorPage";

export const publicRoutes = [
  {
    path: "/*",
    element: <ErrorPage />,
  },
];
