import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./page/Home";
import Product from "./page/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
