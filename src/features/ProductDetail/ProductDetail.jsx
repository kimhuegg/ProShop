import { Breadcrumb, Col, Divider, Layout, Menu, Row, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import ProductImage from "../../components/ProductImage/ProductImage";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductReview from "../../components/ProductReview/ProductReview";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import "./style.scss";

const { Header, Content } = Layout;

const ProductDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(data);

  useEffect(() => {
    productApi.getById(164).then(({ data }) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      {/* <Content className="product" style={{ padding: "0 144px" }}> */}
      {/* <Row align="center">
        <Col span={18}> */}
      <Breadcrumb separator=">" style={{ margin: "16px 0", textAlign: "left" }}>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Category</Breadcrumb.Item>
        <Breadcrumb.Item>Name</Breadcrumb.Item>
      </Breadcrumb>
      <div className="product-information">
        <Skeleton loading={!data?.product?.images?.length}>
          <Row>
            <Col span={9}>
              <ProductImage product={data?.product?.images} />
            </Col>
            <Col span={15}>
              <ProductInfo product={data?.product} />
            </Col>
          </Row>
        </Skeleton>
      </div>
      <Divider className="product-divider" />
      <div className="product-review">
        <ProductReview review={data?.review} />
      </div>
      <div className="related-products">
        <RelatedProducts />
      </div>
      {/* </Col>
      </Row> */}
      {/* </Content> */}
    </div>
  );
};

export default ProductDetail;
