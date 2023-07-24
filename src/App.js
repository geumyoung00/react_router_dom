import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./page/Home";
import Product from "./page/Product";
import RootLayout from "./page/Root";
import ErrorPage from "./page/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  }
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
