import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import PromoInput from "./components/PromoInput";
import Activated from "./components/Activated";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PromoInput />,
      },
      {
        path: "activated",
        element: <Activated />,
      },
    ],
  },
]);