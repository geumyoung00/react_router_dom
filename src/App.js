import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./page/Home";
import Product from "./page/Product";
import RootLayout from "./page/Root";
import ErrorPage from "./page/Error";
import ProductDetailPage from "./page/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetailPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
