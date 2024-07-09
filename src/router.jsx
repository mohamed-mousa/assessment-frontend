import { createBrowserRouter } from "react-router-dom";

// front end pages
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import NotAuthLayout from "@/layouts/NotAuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NotAuthLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
