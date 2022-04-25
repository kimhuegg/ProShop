import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Descriptions, Divider, Input, Rate } from "antd";
import React, { useState } from "react";
import cartLogo from "../../media/Union.png";
import CustomButton from "../CustomButton/CustomButton";
import QuantityButton from "../QuantityButton/QuantityButton";
import "./style.scss";

function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [rate, setRate] = useState(null);

  const addToCarthandler = () => {
    console.log("add to cart");
  };

  const handleIncrease = () => {
    if (quantity < product.countInStock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleRate = (e) => {
    setRate(e);
  };

  return (
    <div className="product-info">
      <h1 className="product-info__name">{product.name}</h1>

      <div className="product-info__rating">
        <Rate className="product-info__rating-item" disabled defaultValue={product.rating} />
        <div className="product-info__rating-item product-info__rating-text">
          {product.numOfReviews} Reviews
        </div>
      </div>

      <div className="product-info__description">{product.description}</div>
      <Descriptions className="product-info__detail" row={3}>
        <Descriptions.Item label="In Stock"> {product.countInStock}</Descriptions.Item>
        <Descriptions.Item label="Brand">{product.brand}</Descriptions.Item>
      </Descriptions>
      <div className="product-info__price">${product.price}</div>

      <div className="product-quantity__text">Quantity</div>
      <div className="product-btn-container">
        {/* <QuantityButton /> */}
        <div className="product-btn">
          <Button
            className="product-quantity__btn"
            type="text"
            size="large"
            icon={<MinusOutlined />}
            onClick={handleDecrease}
          />
          <Input
            className="product-quantity__input"
            style={{ width: "60px" }}
            bordered={false}
            type="number"
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            value={quantity > product.countInStock ? product.countInStock : quantity}
          />
          <Button
            className="product-quantity__btn"
            type="text"
            size="large"
            onClick={handleIncrease}
            icon={<PlusOutlined />}
          />
        </div>
        <CustomButton className="product-add__btn" onClick={addToCarthandler}>
          <img src={cartLogo} />
          Add to Cart
        </CustomButton>
      </div>
      <div className="product-rate">
        <div className="product-rate__text">Rate</div>
        <Rate onChange={handleRate} />
      </div>
    </div>
  );
}

export default ProductInfo;
