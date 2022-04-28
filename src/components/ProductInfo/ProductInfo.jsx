import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Descriptions, Divider, Input, Rate, Typography } from "antd";
import React, { useState } from "react";
import cartLogo from "../../media/Union.png";
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
      <Typography.Title className="product-info__name" level={1}>
        {product.name}
      </Typography.Title>

      <div className="rating">
        <Rate className="rating-item" disabled defaultValue={product.rating} />
        <div className="rating-item ant-rate-text">{product.numOfReviews} Reviews</div>
      </div>

      <div className="product-info__description">{product.description}</div>
      <Divider />
      <Descriptions row={3}>
        <Descriptions.Item label="In Stock"> {product.countInStock}</Descriptions.Item>
        <Descriptions.Item label="Brand">{product.brand}</Descriptions.Item>
      </Descriptions>
      <Typography.Title className="product-info__price" level={1}>
        ${product.price}
      </Typography.Title>

      <div className="product-quantity__text">Quantity</div>
      <div className="product-btn-container">
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
        <Button className="product-add__btn" size="large" type="primary" onClick={addToCarthandler}>
          <img src={cartLogo} />
          Add to Cart
        </Button>
      </div>
      <div className="product-rate">
        <div className="product-rate__text">Rate</div>
        <Rate onChange={handleRate} />
      </div>
    </div>
  );
}

export default ProductInfo;
