import { Breadcrumb, Menu, Skeleton } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cartApi from "../../api/cartApi";
import "./style.scss";

const UserDetail = () => {
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
        <div className="user-detail-title">
          <Breadcrumb separator=">" style={{ margin: "16px 0", textAlign: "left" }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>My Account</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className="user-detail-title__text">My Account</h1>
        </div>
        <div className="user-detail-content">
          <Menu defaultSelectedKeys={["1"]} mode="inline">
            {/* <Menu.Item key="dashboard"> */}
            <div>Navigation</div>
            {/* </Menu.Item> */}
            <SubMenu key="my-profile" title="My Profile">
              <Menu.Item key="product-list">
                <Link to="product">Product List</Link>
              </Menu.Item>
              <Menu.Item key="product-add">
                <Link to="product/create">Add Prodcut</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="user" title="User">
              <Menu.Item key="user-list">User List</Menu.Item>
              <Menu.Item key="user-add">Add User</Menu.Item>
            </SubMenu>
            <Menu.Item key="order">
              <span>Order</span>
            </Menu.Item>
            <Menu.Item key="setting">
              <span>Settings</span>
            </Menu.Item>
          </Menu>
        </div>
      </Skeleton>
    </div>
  );
};

export default UserDetail;
