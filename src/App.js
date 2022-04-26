import { ConfigProvider } from "antd";
import "antd/dist/antd.variable.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarUser from "./features/NavbarUser/NavbarUser";
import ProductDetail from "./features/ProductDetail/ProductDetail";
import VerifyEmail from "./features/VerifyEmail/VerifyEmail";
ConfigProvider.config({
  theme: {
    primaryColor: "#FFD333",
  },
});

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavbarUser />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          {/* <Route element={<UserGuard />}>
            <Route path="cart" element={<ShoppingCart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="userdetail" element={<UserDetail />} />
          </Route>
        </Route>
        <Route element={<AdminGuard />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="product" element={<ProductList />}>
              <Route path="create" element={<ProductCreate />} />
              <Route path=":id" element={<ProductUpdate />} />
            </Route>
            <Route path="user" element={<UserList />}>
              <Route path="create" element={<UserCreate />} />
              <Route path=":id" element={<UserDetail />} />
              <Route path=":id/update" element={<UserUpdate />} />
            </Route>
            <Route path="order" element={<OderList />}>
              <Route path=":id" element={<OrderDetail />} />
            </Route>
          </Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
