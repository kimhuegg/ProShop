import minus from "../../media/minus.png";
import plus from "../../media/plus.png";
import "./style.scss";

const QuantityButton = (onClickMinus, onClickPlus, onChange) => {
  return (
    <div className="quantity-btn">
      <div className="quantity-btn__icon" onClick={onClickMinus}>
        <img src={minus} />
      </div>
      <input
        className="quantity-btn__input"
        type="number"
        onChange={(e) => console.log(e.target.value)}
      />
      <div className="quantity-btn__icon" onClick={onClickPlus}>
        <img src={plus} />
      </div>
    </div>
  );
};

export default QuantityButton;
