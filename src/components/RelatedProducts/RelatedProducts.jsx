import { Card } from "antd";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import leftArrow from "../../media/left.png";
import rightArrow from "../../media/right.png";
import "./style.scss";

const { Meta } = Card;

const RelatedProducts = () => {
  const sliderRef = useRef();

  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrow: false,
  };

  return (
    <>
      <div className="related-products__heading">
        <div className="related-products__name">
          <h2>Related Products</h2>
          <div className="related-products__arrow">
            <img src={leftArrow} onClick={() => sliderRef.current.slickPrev()} />
            <img src={rightArrow} onClick={() => sliderRef.current.slickNext()} />
          </div>
        </div>
        <Slider {...sliderSettings} ref={sliderRef}>
          <Card
            hoverable
            className="s"
            style={{ width: 24 }}
            cover={
              <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
          <Card
            hoverable
            style={{ width: 24 }}
            cover={
              <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>{" "}
          <Card
            hoverable
            style={{ width: 24 }}
            cover={
              <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>{" "}
          <Card
            hoverable
            style={{ width: 24 }}
            cover={
              <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>{" "}
          <Card
            hoverable
            style={{ width: 24 }}
            cover={
              <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>{" "}
          <Card
            hoverable
            style={{ width: 24 }}
            cover={
              <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Slider>
      </div>
    </>
  );
};

export default RelatedProducts;
