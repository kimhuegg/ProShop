import "./style.scss";

const CustomButton = ({ children, className, onClick }) => {
  return (
    <button type="submit" onClick={onClick} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default CustomButton;
