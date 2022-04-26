import { Breadcrumb, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cartApi from "../../api/cartApi";
import "./style.scss";

const ShoppingCart = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      cartApi.getMyCart().then(({ data }) => {
        setData(data);
        setLoading(false);
      });
    }
  }, [token]);

  return (
    <div>
      <Skeleton loading={loading}>
        <div className="cart-title">
          <Breadcrumb separator=">" style={{ margin: "16px 0", textAlign: "left" }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Shopping Cart</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="cart-title__text">Shopping Cart</h1>
        </div>
        <div className="cart-content">123</div>
      </Skeleton>
    </div>
  );
};

export default ShoppingCart;
