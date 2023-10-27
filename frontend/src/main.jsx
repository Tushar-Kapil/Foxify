import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Provider } from "react-redux";
import store from "./store.js";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Shipping from "./pages/Shipping.jsx";
import Payment from "./pages/Payment.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Order from "./pages/Order.jsx";
import Profile from "./pages/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import OrderList from "./pages/admin/OrderList.jsx";
import ProductList from "./pages/admin/ProductList.jsx";
import ProductEdit from "./pages/admin/ProductEdit.jsx";
import AdminRoute from "./components/admin/AdminRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />}></Route>
      <Route path="/search/:keyword" element={<Home />}></Route>
      <Route path="/page/:pageNumber" element={<Home />}></Route>
      <Route
        path="/search/:keyword/page/:pageNumber"
        element={<Home />}
      ></Route>
      <Route path="/product/:id" element={<Product />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>

      <Route path="" element={<PrivateRoute />}>
        <Route path="/shipping" element={<Shipping />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/placeorder" element={<PlaceOrder />}></Route>
        <Route path="/order/:id" element={<Order />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Route>

      <Route path="" element={<AdminRoute />}>
        <Route path="/admin/orderlist" element={<OrderList />}></Route>
        <Route path="/admin/productlist" element={<ProductList />}></Route>
        <Route path="/admin/product/:id/edit" element={<ProductEdit />}></Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);
