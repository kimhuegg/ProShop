<<<<<<< HEAD
import { Breadcrumb, Col, Row, Skeleton } from "antd";
=======
import { Breadcrumb, Col, Divider, Layout, Menu, Row, Skeleton } from "antd";
>>>>>>> hoangpv
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import ProductImage from "../../components/ProductImage/ProductImage";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductReview from "../../components/ProductReview/ProductReview";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import "./style.scss";

<<<<<<< HEAD
const ProductDetail = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    productApi.getById(id).then(({ data }) => {
      setData(data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      <Skeleton loading={loading}>
        <Breadcrumb separator=">" style={{ margin: "16px 24px", textAlign: "left" }}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{data?.product?.name}</Breadcrumb.Item>
          <Breadcrumb.Item>{data?.product?.brand}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="product-information">
=======
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
>>>>>>> hoangpv
          <Row>
            <Col span={9}>
              <ProductImage product={data?.product?.images} />
            </Col>
            <Col span={15}>
              <ProductInfo product={data?.product} />
            </Col>
          </Row>
<<<<<<< HEAD
        </div>
        <div className="product-review">
          <ProductReview data={data} />
        </div>
        <div className="related-products">
          <RelatedProducts />
        </div>
      </Skeleton>
=======
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
>>>>>>> hoangpv
    </div>
  );
};

export default ProductDetail;
