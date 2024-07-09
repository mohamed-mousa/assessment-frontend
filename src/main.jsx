import "flowbite";
import "./assets/index.css";
import router from "./router.jsx";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
