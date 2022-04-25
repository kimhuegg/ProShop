import { Avatar, Button, Divider, Form, Input, Pagination, Rate } from "antd";
import { useRef, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./style.scss";

const ProductReview = ({ data }) => {
  const { reviews, product } = data;
  console.log(product);
  const [active, setActive] = useState(2);
  const inputRef = useRef(null);
  const segmentData = ["Description", "Specification", "Reviews"];

  const handleReview = (event) => {
    console.log("post review");
    console.log("input: ", event);
  };

  return (
    <div>
      <div className="reviews">
        <div className="reviews-segment">
          <ul className="reviews-segment__nav">
            {segmentData.map((data, index) => (
              <li
                key={data}
                className={`reviews-segment__title ${active === index && "active"}`}
                onClick={() => setActive(index)}
              >
                {data}
              </li>
            ))}
            <div className="reviews-segment__indicator" />
          </ul>
        </div>

        <div className="segment-content">
          {active === 2 ? (
            <>
              <h1 className="reviews-title">Customer Reviews</h1>
              <ul className="reviews-list">
                {reviews.result.length > 0 &&
                  reviews.result.map((review, index) => (
                    <li key={index} className="customer-review__item">
                      <div className="customer-review-container">
                        <div className="customer-review__avatar">
                          {review.userReview.avatar ? (
                            <img
                              src={review.userReview.avatar}
                              className="customer-review__avatar-img"
                            />
                          ) : (
                            <Avatar className="customer-review__avatar-img">
                              {review.userReview.username.charAt(0).toUpperCase()}
                            </Avatar>
                          )}
                        </div>
                        <div className="customer-review__content">
                          <div className="customer-review__name">{review.userReview.username}</div>
                          <Rate disabled defaultValue={review.rating} />
                          <div className="customer-review__comment">{review.content}</div>
                          <div className="customer-review__date">
                            {new Date(review.createdAt).toLocaleString("de-DE", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </div>
                        </div>
                      </div>
                      <Divider className="customer-review__divider" />
                    </li>
                  ))}
              </ul>
              <Pagination className="reviews-pagination" />
            </>
          ) : active === 1 ? (
            <>
              <table id="specification">
                <tbody>
                  <tr>
                    <td>Category</td>
                    <td>{product.category}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>{product.name}</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>{product.brand}</td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <>
              <div>{product.description}</div>
            </>
          )}
        </div>
        <div className="write-review">
          <h1 className="write-review__title reviews-title">Write Review</h1>
          <Form ref={inputRef} onFinish={handleReview}>
            <Form.Item
              name="rate"
              rules={[{ required: true, message: "Please rate the product!" }]}
            >
              <Rate className="write-review__rating" />
            </Form.Item>
            <Form.Item
              name="review"
              rules={[{ required: true, message: "Please write your review!" }]}
            >
              <Input className="write-review__content" placeholder="Write Your Review..." />
            </Form.Item>
            <CustomButton className="test">Post your Review</CustomButton>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
