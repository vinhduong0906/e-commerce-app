
import './App.css';
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter
} from "react-router-dom";

import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import Layout from './components/layout/Layout';
import SignOutPage from './pages/SignOutPage';
import ErrorPage from './pages/ErrorPage';
import { useSelector } from 'react-redux';
function App() {
  const loginUser = useSelector(state => state.loginUser);
  const router = createHashRouter([
    {
      element: <Layout />,

      children: [{
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/cart/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "shop/detail/:productId",
        element: <DetailPage />,
      },
      {
        path: "/login",
        element: <SignInPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/shop/:category",
        element: <ShopPage />,
      },
      {
        path: "/logout",

        element: <SignOutPage />
      },
      {
        path: "*",
        element: <ErrorPage />

      }
      ]
    }
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
