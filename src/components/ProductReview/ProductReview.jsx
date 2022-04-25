import { Divider, Pagination, Avatar, Rate, Input, Button } from "antd";
import CustomButton from "../CustomButton/CustomButton";
import "./style.scss";

const datas = [
  {
    avatar: 123,
    name: "Samatha Smith",
    rate: 5,
    comment:
      "Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.",
    date: "27 May, 2018",
  },
  {
    avatar: 456,
    name: "Samatha Smith",
    rate: 4,
    comment:
      "Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ul  Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ul Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ul Phasellus id mattis nulla. Mauris velit nisi, imperdiet vitae sodales in, maximus ut lectus. Vivamus commodo scelerisque lacus, at porttitor dui iaculis id. Curabitur imperdiet ultrices fermentum.",
    date: "27 May, 2018",
  },
  {
    avatar: "yolo3",
    name: "Samatha Smith",
    rate: 0,
    comment: "trices fermentum.",
    date: "27 May, 2018",
  },
];

const ProductReview = () => {
  return (
    <div>
      <div className="reviews">
        <h1 className="reviews-title">Customer Reviews</h1>
        <ul className="reviews-list">
          {datas.map((data) => (
            <li className="customer-review__item">
              <div className="customer-review-container">
                <div className="customer-review__avatar">
                  <span className="customer-review__avatar-data">{data.avatar}</span>
                </div>
                <div className="customer-review__content">
                  <div className="customer-review__name">{data.name}</div>
                  <Rate className="customer-review__rating" disabled defaultValue={data.rate} />
                  <div className="customer-review__comment">{data.comment}</div>
                  <div className="customer-review__date">{data.date}</div>
                </div>
              </div>
              <Divider className="customer-review__divider" />
            </li>
          ))}
        </ul>
        <Pagination className="reviews-pagination" />
      </div>
      <div className="write-review">
        <h1 className="write-review__title reviews-title">Write Review</h1>
        <Rate className="write-review__rating" />
        <input className="write-review__content" placeholder="Write Your Review..." />
        <Button type="primary">Post Your Review</Button>
        <CustomButton>test button</CustomButton>
      </div>
    </div>
  );
};

export default ProductReview;
