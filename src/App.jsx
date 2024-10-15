import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ProductItems from "./pages/Product/Product";
import ProductId from "./pages/ProductId/ProductId";
import CartPage from "./pages/shopping/Shopping";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/product",
      element: <ProductItems />
    },
    {
      path: "/product/:Idpart",
      element: <ProductId />
    },
    {
      path: "/buy",
      element: <CartPage />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
