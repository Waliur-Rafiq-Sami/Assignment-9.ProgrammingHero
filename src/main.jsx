import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import HomePage from "./HomePage/HomePage";
import ErrorPage from "./ErrorPage/ErrorPage";
import PrivateContext from "./PrivacyContext/PrivateContext";
import DetailsCardPopUp from "./HomePage/DetailsCardPopUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
    ],
  },
  {
    path: "/:id",
    element: <DetailsCardPopUp></DetailsCardPopUp>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrivateContext>
      <RouterProvider router={router} />
    </PrivateContext>
  </StrictMode>
);
